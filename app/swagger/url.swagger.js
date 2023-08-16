/**
 * @swagger
 * tags:
 *   - name: Url
 *     description: API for managing urls
 */


/**
 * @swagger
 * /url/list:
 *   get:
 *     summary: Get all urls
 *     tags: [Url]
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: Not Found
 *       500:
 *         description: Internal Server Error
 * 
 * 
 * /url/getById/{id}:
 *   get:
 *     summary: Get url by ID
 *     tags: [Url]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Url ID
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Successful response
 *       403:
 *         description: Access denied
 *       404:
 *         description: Not Found
 *       500:
 *         description: Internal Server Error
 * 
 * 
 * /url/getByLink/{link}:
 *   get:
 *     summary: Get url by link
 *     tags: [Url]
 *     parameters:
 *       - name: link
 *         in: path
 *         description: link
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
 * /url/create:
 *   post:
 *     summary: Create url 
 *     tags: [Url]
 *     parameters:
 *       - name: body
 *         in: body
 *         description: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *               link:
 *                 type: string
 *                 example: /account/list
 *               description:
 *                 type: string
 *                 example: get all account
 *     responses:
 *       200:
 *         description: Successful response
 *       500:
 *         description: Error
 * 
 * 
 * /url/update/{id}:
 *   put:
 *     summary: Change password
 *     tags: [Url]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: url id
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
 *               link:
 *                 type: string
 *                 example: /account/list
 *               description:
 *                 type: string
 *                 example: get all account
 *     responses:
 *       200:
 *         description: Successful response
 *       403:
 *         description: Access denied
 *       500:
 *         description: Internal Server Error
 * 
 * 
 * /url/delete/{id}:
 *   delete:
 *     summary: Delete url by id
 *     tags: [Url]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: url id
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
 */