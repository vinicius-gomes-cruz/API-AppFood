import {model, Schema } from 'mongoose';

// Modelagem da categoria //
export const Category = model('Category', new Schema({
	// Nome da Categoria
	name: {
		type: String, // Tipo do Dicionario
		required: true, // Colocar como Obrigatorio
	},
	// Icone da Categoria
	icon: {
		type: String,// Tipo do Dicionario
		required: true, // Colocar como Obrigatorio
	}
}));