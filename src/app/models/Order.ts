import {model, Schema } from 'mongoose';

// Modelagem do Pedido //
export const Order = model('Order', new Schema({
	// Tabela do Pedido
	table: {
		type: String, // Tipo do Dicionario
		required: true, // Colocar como Obrigatorio
	},
	// Status do Pedido
	status: {
		type: String, // Tipo do Dicionario
		enum: ['WAITING', 'IN_PRODUCTION', 'DONE'],
		default: 'WAITING',
	},
	// Quando o Pedido foi criada
	creatdAt: {
		type: Date, // Tipo do Dicionario
		default: Date.now,
	},
	// Produtos do Pedido
	products: {
		required: true, // Colocar como Obrigatorio
		type:[{
			product: {
				type: Schema.Types.ObjectId, // Tipo do Dicionario
				required: true, // Colocar como Obrigatorio
				ref: 'Product',
			},
			quantity: {
				type: Number, // Tipo do Dicionario
				default: 1,
			},
		}],
	},
}));