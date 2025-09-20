const express = require('express');
const router = express.Router();
const db = require('../db');

// Obtener todas las habitaciones
router.get('/', async (req, res) => {
  try {
    // Primero obtenemos todas las habitaciones
    const [habitaciones] = await db.query('SELECT * FROM habitaciones');

    // Por cada habitación, obtener sus imágenes
    const habitacionesConImagenes = await Promise.all(
      habitaciones.map(async (habitacion) => {
        const [imagenes] = await db.query(
          'SELECT url_imagen FROM imagenes_habitaciones WHERE habitacion_id = ?',
          [habitacion.id]
        );
        return {
          ...habitacion,
          imagenes: imagenes.map(img => img.url_imagen) // Listado de URLs
        };
      })
    );

    res.json(habitacionesConImagenes);
  } catch (error) {
    console.error('Error en GET /habitaciones:', error);
    res.status(500).json({ error: 'Error al obtener habitaciones' });
  }
});


// Obtener una habitación por ID
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM habitaciones WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ error: 'Habitación no encontrada' });
    const [images] = await db.query('SELECT url_imagen FROM imagenes_habitaciones WHERE habitacion_id = ?', [req.params.id]);
    res.json({
      ...rows[0],
      imagenes: images.map(img => img.url_imagen)
    });
  } catch (error) {
    console.error('Error al obtener habitación:', error);
    res.status(500).json({ error: 'Error al obtener la habitación' });
  }
});

// Crear una nueva habitación
router.post('/', async (req, res) => {
  const { numero_habitacion, tipo, descripcion, precio, capacidad, metros_cuadrados, amenidades, estado } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO habitaciones (numero_habitacion, tipo, descripcion, precio, capacidad, metros_cuadrados, amenidades, estado) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [numero_habitacion, tipo, descripcion, precio, capacidad, metros_cuadrados, amenidades, estado]
    );
    res.json({ id: result.insertId, message: 'Habitación creada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear habitación' });
  }
});

// Actualizar habitación
router.put('/:id', async (req, res) => {
  const { numero_habitacion, tipo, descripcion, precio, capacidad, metros_cuadrados, amenidades, estado } = req.body;
  try {
    await db.query(
      'UPDATE habitaciones SET numero_habitacion = ?, tipo = ?, descripcion = ?, precio = ?, capacidad = ?, metros_cuadrados = ?, amenidades = ?, estado = ? WHERE id = ?',
      [numero_habitacion, tipo, descripcion, precio, capacidad, metros_cuadrados, amenidades, estado, req.params.id]
    );
    res.json({ message: 'Habitación actualizada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar habitación' });
  }
});

// Eliminar habitación
router.delete('/:id', async (req, res) => {
  try {
    await db.query('DELETE FROM habitaciones WHERE id = ?', [req.params.id]);
    res.json({ message: 'Habitación eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar habitación' });
  }
});

module.exports = router;
