"use strict";
/**
 * cart-item controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController("api::cart-item.cart-item", ({ strapi }) => ({
    async find(ctx) {
        const user = ctx.state.user;
        if (!user)
            return ctx.unauthorized();
        const entities = await strapi.entityService.findMany("api::cart-item.cart-item", {
            ...ctx.query,
            filters: {
                user: user.id,
            },
        });
        const sanitizedEntities = await this.sanitizeOutput(entities, ctx);
        return this.transformResponse(sanitizedEntities);
    },
    async create(ctx) {
        const user = ctx.state.user;
        if (!user)
            return ctx.unauthorized();
        const { data } = ctx.request.body;
        const entity = await strapi.entityService.create("api::cart-item.cart-item", {
            data: {
                quantity: data.quantity || 1,
                product: data.product,
                user: user.id,
                publishedAt: new Date(),
            },
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
        return this.transformResponse(sanitizedEntity);
    },
}));
