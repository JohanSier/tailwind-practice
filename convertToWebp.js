import { glob } from 'glob';
import sharp from 'sharp';
import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

// Configuración
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const IMAGE_DIR = path.join(__dirname, 'src', 'assets', 'images');
const QUALITY = 80; // Calidad de 1 a 100

// Funciones
async function convertImageToWebp(inputPath) {
  const outputPath = inputPath.replace(/\.[^/.]+$/, '.webp');
  
  // No convertir si ya es webp
  if (inputPath.endsWith('.webp')) {
    console.log(`⏩ Saltando (ya es WebP): ${path.basename(inputPath)}`);
    return;
  }

  try {
    // Verificar si el WebP ya existe
    try {
      await fs.access(outputPath);
      console.log(`⏩ Saltando (WebP ya existe): ${path.basename(inputPath)}`);
      return;
    } catch {
      // El archivo WebP no existe, proceder con la conversión
    }

    await sharp(inputPath)
      .webp({ quality: QUALITY })
      .toFile(outputPath);
    
    console.log(`✅ Convertido: ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);
    
    // Eliminar el original después de la conversión exitosa
    await fs.unlink(inputPath);
    console.log(`🗑️ Eliminado original: ${path.basename(inputPath)}`);
    
  } catch (error) {
    console.error(`❌ Error procesando ${path.basename(inputPath)}:`, error.message);
  }
}

async function processImages() {
  try {
    console.log('🔄 Buscando imágenes en:', IMAGE_DIR);
    
    // Patrones para imágenes comunes
    const imagePatterns = ['**/*.{jpg,jpeg,png,gif}'];
    const files = await glob(imagePatterns, { cwd: IMAGE_DIR, absolute: true });
    
    if (files.length === 0) {
      console.log('ℹ️ No se encontraron imágenes para convertir');
      return;
    }
    
    console.log(`📸 Encontradas ${files.length} imágenes para procesar`);
    
    // Procesar cada imagen
    for (const file of files) {
      await convertImageToWebp(file);
    }
    
    console.log('🎉 ¡Conversión completada!');
  } catch (error) {
    console.error('🔥 Error general:', error);
  }
}

// Ejecutar
processImages();