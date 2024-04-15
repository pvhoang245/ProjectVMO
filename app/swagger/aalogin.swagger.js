/**
 * @swagger
 * tags:
 *   - name: Login
 *     description: API for managing home
 */


/**
 * @swagger
 * 
 * /login:
 *   post:
 *     summary: Login
 *     tags: [Login]
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
 *                 example: hi
 *               password:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       200:
 *         description: Successful response
 *       500:
 *         description: Error
 * 
 * /forgetPassword:
 *   post:
 *     summary: reset pass
 *     tags: [Login]
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
 *                 example: hi
 *               password:
 *                 type: string
 *                 example: 123456
 *               email:
 *                 type: string
 *                 example: icutachandat@gmail.com
 *     responses:
 *       200:
 *         description: Successful response
 *       500:
 *         description: Error
 * 
 * 
 * /sendMailResetPassword:
 *   post:
 *     summary: send mail
 *     tags: [Login]
 *     parameters:
 *       - name: body
 *         in: body
 *         description: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *               email:
 *                 type: string
 *                 example: icutachandat@gmail.com
 *               code:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       200:
 *         description: Successful response
 *       500:
 *         description: Error
 * 
 * 
 * /logout:
 *   get:
 *     summary: logout
 *     tags: [Login]
 *     responses:
 *       200:
 *         description: Successful response
 * 
 */