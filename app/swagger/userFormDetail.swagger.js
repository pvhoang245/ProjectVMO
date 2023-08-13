/**
 * @swagger
 * tags:
 *   - name: User Form Detail
 *     description: API for managing users
 */


/**
 * @swagger
 * /userFormDetail/list/{id}:
 *   get:
 *     summary: Get all users
 *     tags: [User Form Detail]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: UserForm ID
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
 * /userFormDetail/getById/{id}:
 *   get:
 *     summary: Get userFormDetail by ID
 *     tags: [User Form Detail]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: User_Form_Detail ID
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
 * /userFormDetail/create:
 *   post:
 *     summary: Create userFormDetail 
 *     tags: [User Form Detail]
 *     parameters:
 *       - name: body
 *         in: body
 *         description: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *               description:
 *                 type: string
 *                 example: khoi tao project
 *               score:
 *                 type: string
 *                 example: 80
 *               formUserId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful response
 *       500:
 *         description: Error
 * 
 * 
 * /userFormDetail/update/{id}:
 *   put:
 *     summary: Change password
 *     tags: [User Form Detail]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: User_Form_Detail id
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
 *               description:
 *                 type: string
 *                 example: khoi tao project
 *               score:
 *                 type: string
 *                 example: 80
 *               formUserId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: Not Found
 *       500:
 *         description: Internal Server Error
 * 
 * 
 * /userFormDetail/remove/{id}:
 *   delete:
 *     summary: Delete userFormDetail by id
 *     tags: [User Form Detail]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: User_Form_Detail id
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