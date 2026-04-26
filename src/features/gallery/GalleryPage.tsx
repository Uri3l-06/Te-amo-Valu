import { useState } from 'react'
import { SectionTitle } from '../../shared/components/SectionTitle'
import { BackToMenu } from '../../shared/components/BackToMenu'
import { MemoryCard } from './MemoryCard'
import { MemoryModal } from './MemoryModal'
import { memories, type MemoryItem } from './memories.data'

const sortedMemories = [...memories].sort((a, b) => a.displayOrder - b.displayOrder)

export function GalleryPage() {
  const [selectedMemory, setSelectedMemory] = useState<MemoryItem | null>(null)

  return (
    <section className="flex flex-1 flex-col gap-8 pb-10 pt-4 sm:gap-10 sm:pb-14">
      <header className="flex flex-col gap-5">
        <BackToMenu to="/menu" label="Volver a la casita" />

        <SectionTitle
          eyebrow="Galeria"
          title="Los momentitos que no quise dejar perderse"
          description="Un pequeño album de recuerdos, que representa una selección de los momentos más especiales que hemos compartido, dentro de ellos encontraras, soundtracks, imagenes, mis pensamientos y muchooooo más."
        />
      </header>

      <div className="story-grid columns-1 sm:columns-2 xl:columns-3">
        {sortedMemories.map((memory) => (
          <MemoryCard key={memory.id} memory={memory} onOpenCompactMemory={setSelectedMemory} />
        ))}
      </div>

      <MemoryModal memory={selectedMemory} onClose={() => setSelectedMemory(null)} />
    </section>
  )
}
