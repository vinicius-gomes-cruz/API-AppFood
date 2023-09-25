import {model, Schema } from 'mongoose';


// Modelagem do Produto //
export const Product = model('Product', new Schema({
	// Nome do Produto
	name: {  
		type: String, // Tipo do Dicionario
		required: true, // Colocar como Obrigatorio
	},
	// Descrição do Produto
	description: { 
		type: String, // Tipo do Dicionario
		required: true, // Colocar como Obrigatorio
	},
	// Imagem do Produto
	imagePath: { 
		type: String, // Tipo do Dicionario
		required: true, // Colocar como Obrigatorio
	},
	// Preço do Produto
	price: { 
		type: Number, // Tipo do Dicionario
		required: true, // Colocar como Obrigatorio
	},
	// Ingredientes do Produto
	ingredients: { 
		required: true, // Colocar como Obrigatorio
		type:[{
			// Nome do Ingrediente
			name: { 
				type: String, // Tipo do Dicionario
				required: true, // Colocar como Obrigatorio
			},
			// Icone do Ingrediente
			icon: { 
				type: String, // Tipo do Dicionario
				required: true, // Colocar como Obrigatorio
			},
		}],
	},
	// Categoria do Produto
	category: { 
		type: Schema.Types.ObjectId,
		required: true, // Colocar como Obrigatorio
		ref: 'Category',
	},
}));