const express = require("express");
const serviceController = require("../controllers/ServiceController");

const serviceRoutes = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Service:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *        description:
 *          type: string
 *          description: Descripción del servicio
 */

/**
 * @swagger
 * /service/paginate:
 *   post:
 *     summary: Obtiene una lista paginada de servicios
 *     tags: [Service]
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
 *         description: Lista de servicios paginada obtenida con éxito
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
 *                     $ref: '#/components/schemas/Service'
 *       500:
 *         description: Error interno del servidor
 */
serviceRoutes.post('/service/paginate', serviceController.paginate);

/**
 * @swagger
 * /service/all:
 *   get:
 *     summary: Obtiene una lista de todos los servicios
 *     tags: [Service]
 *     responses:
 *       200:
 *         description: Lista de servicios obtenida con éxito
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
 *                     $ref: '#/components/schemas/Service'
 *       500:
 *         description: Error interno del servidor
 */
serviceRoutes.get('/service/all', serviceController.all);

/**
 * @swagger
 * /service/create:
 *   post:
 *     summary: Crea un nuevo servicio
 *     tags: [Service]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Service'
 *     responses:
 *       201:
 *         description: Servicio creado con éxito
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
 *                   example: "Servicio creado exitosamente"
 *                 data:
 *                   type: integer
 *                   example: 12345
 *       400:
 *         description: Solicitud incorrecta, verifique los datos del servicio
 *       500:
 *         description: Error interno del servidor
 */
serviceRoutes.post('/service/create', serviceController.create);

/**
 * @swagger
 * /service/{id}:
 *   put:
 *     summary: Actualiza un servicio existente por su ID
 *     tags: [Service]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del servicio a actualizar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Service'
 *     responses:
 *       200:
 *         description: Servicio actualizado con éxito
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
 *                   example: "Servicio actualizado exitosamente"
 *                 data:
 *                   type: boolean
 *                   example: true
 *       400:
 *         description: Solicitud incorrecta, verifique los datos del servicio
 *       404:
 *         description: Servicio no encontrado
 *       500:
 *         description: Error interno del servidor
 */
serviceRoutes.put('/service/:id', serviceController.update);

/**
 * @swagger
 * /service/{id}:
 *   get:
 *     summary: Obtiene un servicio por su ID
 *     tags: [Service]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del servicio a obtener
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Servicio obtenido con éxito
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
 *                   example: "Servicio obtenido exitosamente"
 *                 data:
 *                   $ref: '#/components/schemas/Service'
 *       404:
 *         description: Servicio no encontrado
 *       500:
 *         description: Error interno del servidor
 */
serviceRoutes.get('/service/:id', serviceController.getById);

/**
 * @swagger
 * /service/{id}:
 *   delete:
 *     summary: Elimina un servicio por su ID
 *     tags: [Service]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del servicio a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Servicio eliminado con éxito
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
 *                   example: "Servicio eliminado exitosamente"
 *                 data:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Servicio no encontrado
 *       500:
 *         description: Error interno del servidor
 */
serviceRoutes.delete('/service/:id', serviceController.remove);

module.exports = serviceRoutes;
