const express = require("express");
const quotationController = require("../controllers/QuotatioController");

const quotationRoutes = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Quotation:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *        date_off_issue:
 *          type: string
 *          format: date
 *          description: Fecha de emisión de la cotización
 *        full_name:
 *          type: string
 *          description: Nombre completo del cliente
 *        email:
 *          type: string
 *          format: email
 *          description: Correo electrónico del cliente
 *        phone:
 *          type: string
 *          description: Número de teléfono del cliente
 *        plate:
 *          type: string
 *          description: Número de placa del vehículo
 *        build_year:
 *          type: integer
 *          description: Año de fabricación del vehículo
 *        brand_id:
 *          type: integer
 *          description: ID de la marca del vehículo
 *        model_id:
 *          type: integer
 *          description: ID del modelo del vehículo
 *        service_id:
 *          type: integer
 *          description: ID del servicio solicitado
 */

/**
 * @swagger
 * /quotation/paginate:
 *   post:
 *     summary: Obtiene una lista paginada de cotizaciones
 *     tags: [Quotation]
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
 *         description: Lista de cotizaciones paginada obtenida con éxito
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
 *                     $ref: '#/components/schemas/Quotation'
 *       500:
 *         description: Error interno del servidor
 */
quotationRoutes.post('/quotation/paginate', quotationController.paginate);

/**
 * @swagger
 * /quotation/all:
 *   get:
 *     summary: Obtiene una lista de todas las cotizaciones
 *     tags: [Quotation]
 *     responses:
 *       200:
 *         description: Lista de cotizaciones obtenida con éxito
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
 *                     $ref: '#/components/schemas/Quotation'
 *       500:
 *         description: Error interno del servidor
 */
quotationRoutes.get('/quotation/all', quotationController.all);

/**
 * @swagger
 * /quotation/create:
 *   post:
 *     summary: Crea una nueva cotización
 *     tags: [Quotation]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Quotation'
 *     responses:
 *       201:
 *         description: Cotización creada con éxito
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
 *                   example: "Cotización creada exitosamente"
 *                 data:
 *                   type: integer
 *                   example: 12345
 *       400:
 *         description: Solicitud incorrecta, verifique los datos de la cotización
 *       500:
 *         description: Error interno del servidor
 */
quotationRoutes.post('/quotation/create', quotationController.create);

/**
 * @swagger
 * /quotation/{id}:
 *   put:
 *     summary: Actualiza una cotización existente por su ID
 *     tags: [Quotation]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la cotización a actualizar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Quotation'
 *     responses:
 *       200:
 *         description: Cotización actualizada con éxito
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
 *                   example: "Cotización actualizada exitosamente"
 *                 data:
 *                   type: boolean
 *                   example: true
 *       400:
 *         description: Solicitud incorrecta, verifique los datos de la cotización
 *       404:
 *         description: Cotización no encontrada
 *       500:
 *         description: Error interno del servidor
 */
quotationRoutes.put('/quotation/:id', quotationController.update);

/**
 * @swagger
 * /quotation/{id}:
 *   get:
 *     summary: Obtiene una cotización por su ID
 *     tags: [Quotation]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la cotización a obtener
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Cotización obtenida con éxito
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
 *                   example: "Cotización obtenida exitosamente"
 *                 data:
 *                   $ref: '#/components/schemas/Quotation'
 *       404:
 *         description: Cotización no encontrada
 *       500:
 *         description: Error interno del servidor
 */
quotationRoutes.get('/quotation/:id', quotationController.getById);

/**
 * @swagger
 * /quotation/{id}:
 *   delete:
 *     summary: Elimina una cotización por su ID
 *     tags: [Quotation]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la cotización a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Cotización eliminada con éxito
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
 *                   example: "Cotización eliminada exitosamente"
 *                 data:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Cotización no encontrada
 *       500:
 *         description: Error interno del servidor
 */
quotationRoutes.delete('/quotation/:id', quotationController.remove);

module.exports = quotationRoutes;
