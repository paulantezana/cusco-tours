const express = require("express");
const modelController = require("../controllers/ModelController");

const modelRoutes = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Model:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *        description:
 *          type: string
 *          description: Descripción del modelo
 */

/**
 * @swagger
 * /model/paginate:
 *   post:
 *     summary: Obtiene una lista paginada de modelos
 *     tags: [Model]
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
 *         description: Lista de modelos paginada obtenida con éxito
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
 *                     $ref: '#/components/schemas/Model'
 *       500:
 *         description: Error interno del servidor
 */
modelRoutes.post('/model/paginate', modelController.paginate);

/**
 * @swagger
 * /model/all:
 *   get:
 *     summary: Obtiene una lista de todos los modelos
 *     tags: [Model]
 *     responses:
 *       200:
 *         description: Lista de modelos obtenida con éxito
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
 *                     $ref: '#/components/schemas/Model'
 *       500:
 *         description: Error interno del servidor
 */
modelRoutes.get('/model/all', modelController.all);

/**
 * @swagger
 * /model/create:
 *   post:
 *     summary: Crea un nuevo modelo
 *     tags: [Model]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Model'
 *     responses:
 *       201:
 *         description: Modelo creado con éxito
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
 *                   example: "Modelo creado exitosamente"
 *                 data:
 *                   type: integer
 *                   example: 12345
 *       400:
 *         description: Solicitud incorrecta, verifique los datos del modelo
 *       500:
 *         description: Error interno del servidor
 */
modelRoutes.post('/model/create', modelController.create);

/**
 * @swagger
 * /model/{id}:
 *   put:
 *     summary: Actualiza un modelo existente por su ID
 *     tags: [Model]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del modelo a actualizar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Model'
 *     responses:
 *       200:
 *         description: Modelo actualizado con éxito
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
 *                   example: "Modelo actualizado exitosamente"
 *                 data:
 *                   type: boolean
 *                   example: true
 *       400:
 *         description: Solicitud incorrecta, verifique los datos del modelo
 *       404:
 *         description: Modelo no encontrado
 *       500:
 *         description: Error interno del servidor
 */
modelRoutes.put('/model/:id', modelController.update);

/**
 * @swagger
 * /model/{id}:
 *   get:
 *     summary: Obtiene un modelo por su ID
 *     tags: [Model]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del modelo a obtener
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Modelo obtenido con éxito
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
 *                   example: "Modelo obtenido exitosamente"
 *                 data:
 *                   $ref: '#/components/schemas/Model'
 *       404:
 *         description: Modelo no encontrado
 *       500:
 *         description: Error interno del servidor
 */
modelRoutes.get('/model/:id', modelController.getById);

/**
 * @swagger
 * /model/{id}:
 *   delete:
 *     summary: Elimina un modelo por su ID
 *     tags: [Model]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del modelo a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Modelo eliminado con éxito
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
 *                   example: "Rol eliminado exitosamente"
 *                 data:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Modelo no encontrado
 *       500:
 *         description: Error interno del servidor
 */
modelRoutes.delete('/model/:id', modelController.remove);

module.exports = modelRoutes;
