import { Navigate, Route, Routes } from 'react-router-dom'
import { GalleryPage } from '../features/gallery/GalleryPage'
import { MemoryDetailPage } from '../features/gallery/MemoryDetailPage'
import { HomePage } from '../features/home/HomePage'
import { LetterPage } from '../features/letter/LetterPage'
import { MenuPage } from '../features/menu/MenuPage'
import { SurprisePage } from '../features/surprise/SurprisePage'
import { MainLayout } from '../layout/MainLayout'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/gallery/:slug" element={<MemoryDetailPage />} />
        <Route path="/letter" element={<LetterPage />} />
        <Route path="/surprise" element={<SurprisePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
