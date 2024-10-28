import React, { useState } from 'react';
import axios from 'axios';

const EditPet = ({ pet, onUpdate, onSave, isNew }) => {
    const [name, setName] = useState(pet.name || '');
    const [description, setDescription] = useState(pet.description || '');
    const [image, setImage] = useState(pet.image || '');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const petData = {name, description, image}
        const token = localStorage.getItem('token');

        try {
            if(isNew && onSave) {
                await onSave(petData)
            } else {
                const response = await axios.put(
                    `https://ong-adote-um-bichinho-back-end.onrender.com/api/pets${pet._id}`,
                    petData,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                onUpdate(pet._id, response.data);                
            }
        } catch (error) {
            console.error('Erro ao editar pet:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col gap-4 bg-white p-3 rounded-lg shadow-lg'>
                <div className='flex items-center gap-2'>
                    <label htmlFor="name" className='text-xl'>Nome: </label>
                    <input
                        id='name'
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nome do Pet"
                        required
                        className='flex flex-grow p-1 border-2 border-primary rounded-md'
                    />
                </div>
                <div className='flex justify-between items-center gap-2'>
                    <label htmlFor="description" className='text-xl'>Descrição: </label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Descrição do Pet"
                        required
                        className='flex flex-grow p-2 border-2 border-primary rounded-md'
                    />
                </div>
                <div className='flex items-center gap-2'>
                    <label htmlFor="image">Imagem: </label>
                    <input
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        placeholder="URL da Imagem (Google Drive Direct Link)"
                        required
                        className='flex flex-grow p-1 border-2 border-primary rounded-md'
                    />
                </div>
                <button type="submit" className='bg-primary p-2 rounded-lg font-bold'>
                    {isNew ? 'Adicionar Pet' : 'Salvar'}
                </button>
            </div>
        </form>
    );
};


export default EditPet;