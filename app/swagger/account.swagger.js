/**
 * @swagger
 * tags:
 *   - name: Account
 *     description: API for managing users
 */


/**
 * @swagger
 * /account/list:
 *   get:
 *     summary: Get all users
 *     tags: [Account]
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: Not Found
 *       500:
 *         description: Internal Server Error
 * 
 * 
 * /account/getById/{id}:
 *   get:
 *     summary: Get account by ID
 *     tags: [Account]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Account ID
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
 * /account/getByUsername/{username}:
 *   get:
 *     summary: Get account by username
 *     tags: [Account]
 *     parameters:
 *       - name: username
 *         in: path
 *         description: username
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
 * /account/create:
 *   post:
 *     summary: Create account 
 *     tags: [Account]
 *     parameters:
 *       - name: body
 *         in: body
 *         description: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *               username:
 *                 type: string
 *                 example: hoang
 *               password:
 *                 type: string
 *                 example: 123456
 *               role:
 *                 type: string
 *                 example: manager
 *               managerId:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       200:
 *         description: Successful response
 *       500:
 *         description: Error
 * 
 * 
 * /account/changePassword/{id}:
 *   put:
 *     summary: Change password
 *     tags: [Account]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: account id
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
 *               password:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       200:
 *         description: Successful response
 *       403:
 *         description: Access denied
 *       500:
 *         description: Internal Server Error
 * 
 * 
 * /account/removeById/{id}:
 *   delete:
 *     summary: Delete account by id
 *     tags: [Account]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: account id
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
 * /account/removeByUsername/{username}:
 *   delete:
 *     summary: Delete account by username
 *     tags: [Account]
 *     parameters:
 *       - name: username
 *         in: path
 *         description: username
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
 */