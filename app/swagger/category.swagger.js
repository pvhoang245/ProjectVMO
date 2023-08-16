/**
 * openapi: 3.0.0
 * @swagger
 * tags:
 *   - name: Category
 *     description: API for managing categories
 */


/**
 * @swagger
 * /category/list:
 *   get:
 *     summary: Get all categories
 *     tags: [Category]
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: Not Found
 *       500:
 *         description: Internal Server Error
 * 
 * 
 * /category/getById/{id}:
 *   get:
 *     summary: Get category by ID
 *     tags: [Category]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Category ID
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: Not Found
 *       500:
 *         description: Internal Server Error
 * 
 * 
 * /category/create:
 *   post:
 *     summary: Create category 
 *     tags: [Category]
 *     parameters:
 *       - name: body
 *         in: body
 *         description: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *               name:
 *                 type: string
 *                 example: Dinh ki hang thang
 *     responses:
 *       200:
 *         description: Successful response
 *       500:
 *         description: Error
 * 
 * 
 * /category/update/{id}:
 *   put:
 *     summary: update category
 *     tags: [Category]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Category id
 *         required: true
 *         schema:
 *           type: string
 *       - name: body
 *         in: body
 *         description: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *               name:
 *                 type: string
 *                 example: Dinh ki hang thang
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: Access denied
 *       500:
 *         description: Internal Server Error
 * 
 * 
 * /category/delete/{id}:
 *   delete:
 *     summary: Delete category by id
 *     tags: [Category]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Category id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: Not Found
 *       500:
 *         description: Internal Server Error
 * 
 */