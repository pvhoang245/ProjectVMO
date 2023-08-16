/**
 * @swagger
 * tags:
 *   - name: User
 *     description: API for managing users
 */


/**
 * @swagger
 * /user/list:
 *   get:
 *     summary: Get all users
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: Not Found
 *       500:
 *         description: Internal Server Error
 * 
 * 
 * /user/getById/{id}:
 *   get:
 *     summary: Get user by ID
 *     tags: [User]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: User ID
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
 * /user/getByName/{name}:
 *   get:
 *     summary: Get user by name
 *     tags: [User]
 *     parameters:
 *       - name: name
 *         in: path
 *         description: name
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
 * /user/create:
 *   post:
 *     summary: Create user 
 *     tags: [User]
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
 *                 example: pham viet hoang
 *               birthday:
 *                 type: string
 *                 example: 24-05-2001
 *               address:
 *                 type: string
 *                 example: hung yen
 *               sex:
 *                 type: string
 *                 example: nam
 *               image:
 *                 type: string
 *                 example: 111
 *               bhxh:
 *                 type: string
 *                 example: 123456
 *               phone:
 *                 type: string
 *                 example: 0963333
 *               email:
 *                 type: string
 *                 example: icutachandat@gmail.com
 *               roleId:
 *                 type: string
 *                 example: 1
 *               accountId:
 *                 type: string
 *                 example: 1
 *               managerId:
 *                 type: string
 *                 example: 1
 *     responses:
 *       200:
 *         description: Successful response
 *       500:
 *         description: Error
 * 
 * 
 * /user/update/{id}:
 *   put:
 *     summary: update user
 *     tags: [User]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: user id
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
 *                 example: pham viet hoang
 *               birthday:
 *                 type: string
 *                 example: 24-05-2001
 *               address:
 *                 type: string
 *                 example: hung yen
 *               sex:
 *                 type: string
 *                 example: nam
 *               image:
 *                 type: string
 *                 example: 111
 *               bhxh:
 *                 type: string
 *                 example: 123456
 *               phone:
 *                 type: string
 *                 example: 0963333
 *               email:
 *                 type: string
 *                 example: icutachandat@gmail.com
 *     responses:
 *       200:
 *         description: Successful response
 *       403:
 *         description: Access denied
 *       500:
 *         description: Internal Server Error
 * 
 * 
 * /user/remove/{id}:
 *   delete:
 *     summary: Delete user by id
 *     tags: [User]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: user id
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