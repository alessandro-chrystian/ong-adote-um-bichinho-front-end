import React from 'react';

const CardPets = ({ img, title, description, isAdmin, onEdit, onDelete }) => {
    return (
        <div className="bg-white shadow-md rounded-lg w-[400px] p-4">
            <img src={img} alt={title} className="w-full h-48 rounded-t-lg" />
            <h2 className="text-xl">{title}</h2>
            <p>{description}</p>
            {isAdmin && (
                <div className="flex justify-between mt-2">
                    <button onClick={onEdit} className="bg-yellow-500 text-white px-2 py-1 rounded">Editar</button>
                    <button onClick={onDelete} className="bg-red-500 text-white px-2 py-1 rounded">Excluir</button>
                </div>
            )}
        </div>
    );
};

export default CardPets;