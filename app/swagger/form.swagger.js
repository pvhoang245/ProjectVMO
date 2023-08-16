/**
 * @swagger
 * tags:
 *   - name: Form
 *     description: API for managing forms
 */


/**
 * @swagger
 * /form/list:
 *   get:
 *     summary: Get all forms
 *     tags: [Form]
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: Not Found
 *       500:
 *         description: Internal Server Error
 * 
 * 
 * /form/getById/{id}:
 *   get:
 *     summary: Get form by ID
 *     tags: [Form]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Form ID
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
 * /form/getByCategoryId/{categoryId}:
 *   get:
 *     summary: Get form by categoryId
 *     tags: [Form]
 *     parameters:
 *       - name: categoryId
 *         in: path
 *         description: category Id
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
 * 
 * /form/create:
 *   post:
 *     summary: Create form 
 *     tags: [Form]
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
 *                 example: dinh ki t8
 *               description:
 *                 type: string
 *                 example: dinh ki t8
 *               date:
 *                 type: date
 *                 example: 2023-08-10
 *               duedate:
 *                 type: date
 *                 example: 2023-08-31
 *               categoryId:
 *                 type: string
 *                 example: 1
 *     responses:
 *       200:
 *         description: Successful response
 *       500:
 *         description: Internal Server Error
 * 
 * 
 * /form/update/{id}:
 *   put:
 *     summary: update form
 *     tags: [Form]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Form id
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
 *                 example: dinh ki t8
 *               description:
 *                 type: string
 *                 example: dinh ki t8
 *               date:
 *                 type: date
 *                 example: 2023-08-10
 *               duedate:
 *                 type: date
 *                 example: 2023-08-31
 *               categoryId:
 *                 type: string
 *                 example: 1
 *     responses:
 *       200:
 *         description: Successful response
 *       403:
 *         description: Access denied
 *       500:
 *         description: Internal Server Error
 * 
 * 
 * /form/remove/{id}:
 *   delete:
 *     summary: Delete form by id
 *     tags: [Form]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Form id
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