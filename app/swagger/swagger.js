/**
 * @swagger
 * tags:
 *   - name: User
 *     description: API for managing users
 *   - name: Models
 *     description: API for managing models
 *   - name: ttt
 *     description: API for managing models
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
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful response
 * 
 */