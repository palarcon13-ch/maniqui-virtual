// Ejemplo para tu app React - Conecta al backend
import { useState } from 'react'

export default function MannequinCanvas(){
  const [layers, setLayers] = useState([])

  const uploadClothing = async (file, category) => {
    const form = new FormData()
    form.append('file', file)
    const res = await fetch(`http://localhost:8000/api/v1/wardrobe/upload?category=${category}`, {
      method: 'POST',
      body: form
    })
    const data = await res.json()
    // data.image_url ya viene con fondo transparente!
    setLayers([...layers, { 
      item_id: data.id, 
      image_url: data.image_url,
      x: 100, y: 100, 
      z_index: data.z_index_suggestion,
      scale: 1 
    }])
  }

  const saveOutfit = async () => {
    await fetch('http://localhost:8000/api/v1/outfits/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ name: "Mi Look 1", layers })
    })
  }

  return (
    <div>
      {/* Tu canvas con z-index layering */}
      <div className="relative w-[400px] h-[700px]">
        {layers.sort((a,b)=>a.z_index-b.z_index).map(l => (
          <img key={l.item_id} src={l.image_url} 
               style={{position:'absolute', left:l.x, top:l.y, zIndex:l.z_index, transform:`scale(${l.scale})`}} />
        ))}
      </div>
      <button onClick={saveOutfit}>Guardar Outfit</button>
    </div>
  )
}