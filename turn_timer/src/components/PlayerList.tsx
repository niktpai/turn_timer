'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus, Minus, GripVertical } from 'lucide-react'
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import { SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

interface Player {
  id: string
  name: string
}

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
    <li ref={setNodeRef} style={style} {...attributes} {...listeners} className="flex items-center space-x-2 bg-secondary p-2 rounded">
      <GripVertical size={16} className="cursor-move" />
      <span className="flex-grow">{name}</span>
      <Button variant="ghost" size="sm" onClick={() => onRemove(id)}>
        <Minus size={16} />
      </Button>
    </li>
  )
}

export default function PlayerList({ initialPlayers = [], onPlayersChange }: { initialPlayers?: Player[], onPlayersChange?: (players: Player[]) => void }) {
  const [players, setPlayers] = useState<Player[]>(initialPlayers)
  const [newPlayerName, setNewPlayerName] = useState('')

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const addPlayer = () => {
    if (newPlayerName.trim()) {
      const updatedPlayers = [...players, { id: Date.now().toString(), name: newPlayerName.trim() }]
      setPlayers(updatedPlayers)
      setNewPlayerName('')
      onPlayersChange?.(updatedPlayers)
    }
  }

  const removePlayer = (id: string) => {
    const updatedPlayers = players.filter(player => player.id !== id)
    setPlayers(updatedPlayers)
    onPlayersChange?.(updatedPlayers)
  }

  const handleDragEnd = (event: any) => {
    const { active, over } = event

    if (active.id !== over.id) {
      setPlayers((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id)
        const newIndex = items.findIndex((item) => item.id === over.id)

        const newItems = [...items]
        const [reorderedItem] = newItems.splice(oldIndex, 1)
        newItems.splice(newIndex, 0, reorderedItem)

        onPlayersChange?.(newItems)
        return newItems
      })
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
              addPlayer()
            }
          }}
        />
        <Button onClick={addPlayer}><Plus size={16} /></Button>
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
