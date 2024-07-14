const express = require("express");
const brandController = require("../controllers/BrandController");

const brandRoutes = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Brand:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *        description:
 *          type: string
 *          description: Descripción de la marca
 */

/**
 * @swagger
 * /brand/paginate:
 *   post:
 *     summary: Obtiene una lista paginada de marcas
 *     tags: [Brand]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               page:
 *                 type: integer
 *               limit:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Lista de marcas paginada obtenida con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Brand'
 *       500:
 *         description: Error interno del servidor
 */
brandRoutes.post('/brand/paginate', brandController.paginate);


/**
 * @swagger
 * /brand/all:
 *   get:
 *     summary: Obtiene una lista paginada de marcas
 *     tags: [Brand]
 *     responses:
 *       200:
 *         description: Lista de marcas obtenida con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Brand'
 *       500:
 *         description: Error interno del servidor
 */
brandRoutes.get('/brand/all', brandController.all);

/**
 * @swagger
 * /brand/create:
 *   post:
 *     summary: Crea una nueva marca
 *     tags: [Brand]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Brand'
 *     responses:
 *       201:
 *         description: Marca creada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Marca creada exitosamente"
 *                 data:
 *                   type: integer
 *                   example: 12345
 *       400:
 *         description: Solicitud incorrecta, verifique los datos de la marca
 *       500:
 *         description: Error interno del servidor
 */
brandRoutes.post('/brand/create', brandController.create);

/**
 * @swagger
 * /brand/{id}:
 *   put:
 *     summary: Actualiza una marca existente por su ID
 *     tags: [Brand]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la marca a actualizar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Brand'
 *     responses:
 *       200:
 *         description: Marca actualizada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Marca actualizada exitosamente"
 *                 data:
 *                   type: boolean
 *                   example: true
 *       400:
 *         description: Solicitud incorrecta, verifique los datos de la marca
 *       404:
 *         description: Marca no encontrada
 *       500:
 *         description: Error interno del servidor
 */
brandRoutes.put('/brand/:id', brandController.update);

/**
 * @swagger
 * /brand/{id}:
 *   get:
 *     summary: Obtiene una marca por su ID
 *     tags: [Brand]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la marca a obtener
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Marca obtenida con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Marca obtenida exitosamente"
 *                 data:
 *                   $ref: '#/components/schemas/Brand'
 *       404:
 *         description: Marca no encontrada
 *       500:
 *         description: Error interno del servidor
 */
brandRoutes.get('/brand/:id', brandController.getById);

/**
 * @swagger
 * /brand/{id}:
 *   delete:
 *     summary: Elimina una marca por su ID
 *     tags: [Brand]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la marca a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Marca eliminada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Marca eliminada exitosamente"
 *                 data:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Marca no encontrada
 *       500:
 *         description: Error interno del servidor
 */
brandRoutes.delete('/brand/:id', brandController.remove);

module.exports = brandRoutes;
