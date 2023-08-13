/**
 * @swagger
 * tags:
 *   - name: User Form
 *     description: API for managing userForms
 */


/**
 * @swagger
 * /userForm/list:
 *   get:
 *     summary: Get all userForms
 *     tags: [User Form]
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: Not Found
 *       500:
 *         description: Internal Server Error
 * 
 * 
 * /userForm/getById/{id}:
 *   get:
 *     summary: Get userForm by ID
 *     tags: [User Form]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: User_Form ID
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
 * /userForm/getByFormId/{id}:
 *   get:
 *     summary: Get userForm by formId
 *     tags: [User Form]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: formId
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
 * /userForm/getByUserId/{id}:
 *   get:
 *     summary: Get userForm by userId
 *     tags: [User Form]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: userId
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
 * /userForm/getByFormIdUserId:
 *   post:
 *     summary: Get userForm by formId and userId
 *     tags: [User Form]
 *     parameters:
 *       - name: formId, userId
 *         in: body
 *         description: formId, userId
 *         required: true
 *         schema:
 *           type: string
 *           properties:
 *               formId:
 *                 type: string
 *               userId:
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
 * /userForm/create:
 *   post:
 *     summary: Create userForm 
 *     tags: [User Form]
 *     parameters:
 *       - name: body
 *         in: body
 *         description: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *               status:
 *                 type: string
 *                 example: new
 *               userId:
 *                 type: string
 *               formId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful response
 *       500:
 *         description: Error
 * 
 * 
 * /userForm/update/{id}:
 *   put:
 *     summary: Change password
 *     tags: [User Form]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: User_Form id
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
 *               status:
 *                 type: string
 *                 example: submit
 *               managerCmt:
 *                 type: string
 *               userCmt:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful response
 *       403:
 *         description: Access denied
 *       500:
 *         description: Internal Server Error
 * 
 * 
 * /userForm/remove/{id}:
 *   delete:
 *     summary: Delete userForm by id
 *     tags: [User Form]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: User_Form id
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