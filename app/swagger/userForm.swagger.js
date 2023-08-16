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
 * /userForm/getByFormId/{formId}:
 *   get:
 *     summary: Get userForm by formId
 *     tags: [User Form]
 *     parameters:
 *       - name: formId
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
 * /userForm/getByUserId/{userId}:
 *   get:
 *     summary: Get userForm by userId
 *     tags: [User Form]
 *     parameters:
 *       - name: userId
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
 * /userForm/getListOfManager/{formId}:
 *   get:
 *     summary: Get userForm of user under
 *     tags: [User Form]
 *     parameters:
 *       - name: formId
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
 * 
 * /userForm/getByFormIdUserId/{formId}/{userId}:
 *   get:
 *     summary: Get userForm by formId and userId
 *     tags: [User Form]
 *     parameters:
 *       - name: formId
 *         in: path
 *         description: formId
 *         required: true
 *         schema:
 *           type: string
 *       - name: userId
 *         in: path
 *         description: userId
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