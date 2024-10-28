import React, { useEffect, useState } from 'react';
import CardPets from '../components/CardPets';
import EditPet from '../components/EditPet';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const Pets = () => {
    const [pets, setPets] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);
    const [editingPet, setEditingPet] = useState(null);
    const [isAdding, setIsAdding] = useState(false)

    const fetchPets = async () => {
        try {
            const res = await axios.get('https://ong-adote-um-bichinho-back-end.onrender.com/api/pets');
            setPets(res.data);
        } catch (error) {
            console.error('Erro ao buscar pets:', error);
        }
    };

    const handleUpdate = (id, updatedPet) => {
        setPets((prevPets) => 
            prevPets.map((pet) => (pet._id === id ? { ...pet, ...updatedPet } : pet))
        );
        setEditingPet(null);
    };

    const handleAddPet = async (newPet) => {
        const token = localStorage.getItem('token');
    
        try {
            const response = await axios.post(
                'https://ong-adote-um-bichinho-back-end.onrender.com/api/pets',
                newPet,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setPets((prevPets) => [...prevPets, response.data]);
            setIsAdding(false)
        } catch (error) {
            console.error('Erro ao adicionar pet:', error);
        }
    };

    const handleDeletePet = async (petId) => {
        const token = localStorage.getItem('token');

        try {
            await axios.delete(`https://ong-adote-um-bichinho-back-end.onrender.com/api/pets${petId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setPets((prevPets) => prevPets.filter((pet) => pet._id !== petId));
        } catch (error) {
            console.error('Erro ao excluir pet:', error);
        }
    };

    useEffect(() => {
      fetchPets();

      const token = localStorage.getItem('token');
      if (token) {
          try {
              const decodedToken = jwtDecode(token);

              if (decodedToken.role === 'admin') {
                  setIsAdmin(true);
              } else {
                  setIsAdmin(false);
              }
          } catch (error) {
              console.error('Erro ao decodificar o token:', error);
              setIsAdmin(false);
          }
      } else {
          setIsAdmin(false);
      }
  }, []);

    return (
        <section className="flex flex-col gap-6 mb-10">
            <h1 className="text-4xl text-center mt-10">Conheça alguns dos nossos bichinhos!</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container m-auto overflow-y-auto h-[550px] mb-10">
                {pets.map((pet) => (
                    <div key={pet._id} className='flex items-center justify-center p-5'>
                        {editingPet === pet._id ? (
                            <EditPet pet={pet} onUpdate={handleUpdate} />
                        ) : (
                            <CardPets
                                img={pet.image}
                                title={pet.name}
                                description={pet.description}
                                petId={pet._id}
                                isAdmin={isAdmin}
                                onEdit={() => setEditingPet(pet._id)}
                                onDelete={() => handleDeletePet(pet._id)}
                            />
                        )}
                    </div>
                ))}
                {isAdmin && !isAdding && pets.length < 20 && (
                        <div className='flex items-center justify-center p-5'>
                            <div
                                onClick={() => setIsAdding(true)}
                                className="flex items-center justify-center w-full h-48 border-2 border-dashed border-primary rounded-lg cursor-pointer"
                            >
                                <span className="text-xl">Adicionar Novo Pet</span>
                            </div>
                        </div>
                    )}
                {isAdding && (
                    <div className='flex items-center justify-center p-5'>
                        <EditPet 
                            pet={{ name: '', description: '', image: '' }}
                            onSave={handleAddPet}
                            isNew
                        />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Pets;