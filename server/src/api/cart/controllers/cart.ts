/**
 * cart controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::cart.cart', ({ strapi }) => ({
  
    async find(ctx: any) {
        const { user } = ctx.state.user;

        if (!user) {
            return ctx.unauthorized('You must be logged in to view your cart');
        }

        const entities = await strapi.entityService.findMany('api::cart.cart', {
            ...ctx.query,
            filters: { user: user.id },
        });

        const sanitizedEntities = await this.sanitizeOutput(entities, ctx);

        return this.transformResponse(sanitizedEntities);
    },

    async findOne(ctx: any) {
        const { id } = ctx.params;
        const { user } = ctx.state.user;

        if (!user) {
            return ctx.unauthorized('You must be logged in.');
        }

        const entity = await strapi.db.query('api::cart.cart').findOne({
            where: { id, user: { id: user.id } },
            populate: (ctx.query.populate as any) || true,
        });

        if (!entity) {
            return ctx.notFound('Cart not found');
        }

        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);
    },

    async create(ctx: any) {
        const { user } = ctx.state.user;

        if (!user) {
            return ctx.unauthorized('You must be logged in to create a cart');
        }

        const entity = await strapi.entityService.create('api::cart.cart', {
            data: {
                user: user.id,
                publishedAt: new Date(),
            },
        });

        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);
    } 

}));
