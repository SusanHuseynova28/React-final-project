import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const MyCRUDApp = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      category: "TECHNOLOGY",
      title: "A Review of the Venus Optics Argus 18mm f/0.95 MFT APO Lens",
      date: "Jan 15, 2021",
      author: "Shane Doe",
      rating: "8.1",
      image: "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/thisisengineering-raeng-a7A9O5htrKs-unsplash-1024x683.jpg",
    },
    {
      id: 2,
      category: "GADGETS",
      title: "DJI Avata Review: Immersive FPV Flying For Drone Enthusiasts",
      date: "Jan 15, 2021",
      author: "Shane Doe",
      rating: "8.9",
      image: "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/dji-avata-review-1024x576.jpg",
    },
    {
      id: 3,
      category: "GADGETS",
      title: "Bose QuietComfort Earbuds II: Noise-Cancellation Kings Reviewed",
      date: "Jan 15, 2021",
      author: "Shane Doe",
      rating: "8.9",
      image: "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/airpods.jpg",
    },
    {
      id: 4,
      category: "TECHNOLOGY",
      title: "AMD Ryzen 9 7900X Review: Zen 4 Has a Pricing Problem",
      date: "Jan 15, 2021",
      author: "Shane Doe",
      rating: "81%",
      image: "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/ryzen.jpg",
    },
  ]);

  const [isCreating, setIsCreating] = useState(false);

  const handleDelete = (id) => {
    try {
      setCards(cards.filter((card) => card.id !== id));
      toast.success("Card deleted successfully");
    } catch (error) {
      toast.error("An error occurred while deleting the card");
    }
  };

  const handleAddCard = (values) => {
    try {
      if (!values.title || !values.category) {
        throw new Error("Title and category are required");
      }
      setCards([
        ...cards,
        { id: cards.length + 1, ...values }
      ]);
      setIsCreating(false);
      toast.success("Card added successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleEditCard = (id, values) => {
    try {
      if (!values.title || !values.category) {
        throw new Error("Title and category are required");
      }
      setCards(cards.map(card => card.id === id ? { ...card, ...values } : card));
      toast.success("Card updated successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="App container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">CRUD Cards</h1>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Manage Cards</h2>
        <button
          onClick={() => setIsCreating(true)}
          className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded-full flex items-center"
        >
          <FaPlus className="mr-2" /> Create
        </button>
      </div>

      {isCreating && (
        <CardForm onSubmit={handleAddCard} onCancel={() => setIsCreating(false)} />
      )}

      <div className="grid grid-cols-4 gap-4">
        {cards.map((card) => (
          <Card key={card.id} card={card} onDelete={handleDelete} onEdit={handleEditCard} />
        ))}
      </div>

      <ToastContainer />
    </div>
  );
};

const Card = ({ card, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="card bg-white rounded-lg shadow-md p-4 relative">
      <img src={card.image} alt={card.title} className="w-full h-40 object-cover rounded-t-lg" />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className={`badge bg-${card.category.toLowerCase()} text-white px-2 py-1 rounded`}>
            {card.category}
          </span>
          <span className="rating bg-blue-600 text-white px-2 py-1 rounded-full">
            {card.rating}
          </span>
        </div>
        <h2 className="text-lg font-bold mb-2">{card.title}</h2>
        <div className="text-gray-500 text-sm mb-4">
          {card.author} · {card.date}
        </div>

        <div className="crud-controls flex justify-between">
          <button
            onClick={() => setIsEditing(true)}
            className="text-green-500"
          >
            <FaEdit />
          </button>
          <button
            onClick={() => onDelete(card.id)}
            className="text-red-500"
          >
            <FaTrash />
          </button>
        </div>

        {isEditing && (
          <CardForm
            card={card}
            onSubmit={(values) => {
              onEdit(card.id, values);
              setIsEditing(false);
            }}
            onCancel={() => setIsEditing(false)}
          />
        )}
      </div>
    </div>
  );
};

const CardForm = ({ card, onSubmit, onCancel }) => {
  return (
    <Formik
      initialValues={{
        category: card?.category || '',
        title: card?.title || '',
        date: card?.date || '',
        author: card?.author || '',
        rating: card?.rating || '',
        image: card?.image || '',
      }}
      onSubmit={(values) => {
        onSubmit(values);
        if (onCancel) onCancel();
      }}
    >
      {() => (
        <Form className="bg-gray-100 p-4 rounded-lg mt-4">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label>Category</label>
              <Field name="category" className="form-input w-full" />
            </div>
            <div>
              <label>Title</label>
              <Field name="title" className="form-input w-full" />
            </div>
            <div>
              <label>Date</label>
              <Field name="date" className="form-input w-full" />
            </div>
            <div>
              <label>Author</label>
              <Field name="author" className="form-input w-full" />
            </div>
            <div>
              <label>Rating</label>
              <Field name="rating" className="form-input w-full" />
            </div>
            <div>
              <label>Image URL</label>
              <Field name="image" className="form-input w-full" />
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Save
            </button>
            {onCancel && (
              <button
                type="button"
                onClick={onCancel}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2"
              >
                Cancel
              </button>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default MyCRUDApp;
