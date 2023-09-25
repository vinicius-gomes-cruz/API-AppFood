import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';

import { router } from './router';

// Iniciar o servidor //
mongoose.connect('mongodb://localhost:27017')
	.then(() => { // Tenta executar esse bloco
		const app = express();  //
		const port = 3000;  // Variavel da porta

		app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
		app.use(express.json());
		app.use(router); // Rota a ser usada
		//teclado de emotion tecla win+.
		app.listen(port, () => {
			console.log(`🚗Server is runing on http://localhost:${port}`); // Print do local que o servidor esta sendo executado
		});
	})
	.catch(() => console.log('Erro ao conectar no mongoDb')); // Se ocorrer um erro