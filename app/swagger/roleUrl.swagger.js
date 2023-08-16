/**
 * @swagger
 * tags:
 *   - name: Role Url
 *     description: API for managing role_url
 */


/**
 * @swagger
 * /roleUrl/list:
 *   get:
 *     summary: Get all role_url
 *     tags: [Role Url]
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: Not Found
 *       500:
 *         description: Internal Server Error
 * 
 * 
 * /roleUrl/getById/{id}:
 *   get:
 *     summary: Get roleUrl by ID
 *     tags: [Role Url]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Role_Url ID
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
 * /roleUrl/getByRole/{role}:
 *   get:
 *     summary: Get roleUrl by role
 *     tags: [Role Url]
 *     parameters:
 *       - name: role
 *         in: path
 *         description: role
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
 * /roleUrl/getByUrl/{link}:
 *   get:
 *     summary: Get roleUrl by url
 *     tags: [Role Url]
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
 * /roleUrl/getByRoleUrl/{role}/{link}:
 *   get:
 *     summary: Get roleUrl by role and url
 *     tags: [Role Url]
 *     parameters:
 *       - name: role
 *         in: path
 *         description: role
 *         required: true
 *         schema:
 *           type: string
 *       - name: link
 *         in: path
 *         description:  link
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
 * /roleUrl/create:
 *   post:
 *     summary: Create roleUrl 
 *     tags: [Role Url]
 *     parameters:
 *       - name: body
 *         in: body
 *         description: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *               role:
 *                 type: string
 *                 example: admin
 *               link:
 *                 type: string
 *                 example: /account/list
 *     responses:
 *       200:
 *         description: Successful response
 *       500:
 *         description: Error
 * 
 * 
 * /roleUrl/delete/{id}:
 *   delete:
 *     summary: Delete roleUrl by id
 *     tags: [Role Url]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Role_Url id
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