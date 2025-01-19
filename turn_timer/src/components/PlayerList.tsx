'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus, Minus, GripVertical } from 'lucide-react'
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from '@dnd-kit/core'
import { SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { usePlayers } from '@/contexts/PlayerContext'

interface SortableItemProps {
  id: string
  name: string
  onRemove: (id: string) => void
}

function SortableItem({ id, name, onRemove }: SortableItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div className="flex items-center space-x-2">
      <li ref={setNodeRef} style={style} {...attributes} {...listeners} className="flex-grow flex items-center space-x-2 bg-secondary p-2 rounded">
        <GripVertical size={16} className="cursor-move" />
        <span className="flex-grow">{name}</span>
      </li>
      <Button
        variant="ghost"
        size="sm"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          onRemove(id)
        }}
      >
        <Minus size={16} />
      </Button>
    </div>
  )
}

export default function PlayerList() {
  const { players, addPlayer, removePlayer, reorderPlayers } = usePlayers()
  const [newPlayerName, setNewPlayerName] = useState('')

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const handleAddPlayer = () => {
    if (newPlayerName.trim()) {
      addPlayer(newPlayerName)
      setNewPlayerName('')
    }
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (active.id !== over?.id) {
      const oldIndex = players.findIndex((item) => item.id === active.id)
      const newIndex = players.findIndex((item) => item.id === over?.id)

      const newItems = [...players]
      const [reorderedItem] = newItems.splice(oldIndex, 1)
      newItems.splice(newIndex, 0, reorderedItem)

      reorderPlayers(newItems)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <Input
          type="text"
          value={newPlayerName}
          onChange={(e) => setNewPlayerName(e.target.value)}
          placeholder="Enter player name"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleAddPlayer()
            }
          }}
        />
        <Button onClick={handleAddPlayer}>
          <Plus size={16} />
        </Button>
      </div>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={players} strategy={verticalListSortingStrategy}>
          <ul className="space-y-2">
            {players.map((player) => (
              <SortableItem key={player.id} id={player.id} name={player.name} onRemove={removePlayer} />
            ))}
          </ul>
        </SortableContext>
      </DndContext>
    </div>
  )
}
