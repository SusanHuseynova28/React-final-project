import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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
      image:
        "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-leon-3636001-2-450x300.jpg",
    },
    {
      id: 2,
      category: "GADGETS",
      title: "DJI Avata Review: Immersive FPV Flying For Drone Enthusiasts",
      date: "Jan 15, 2021",
      author: "Shane Doe",
      rating: "8.9",
      image:
        "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/surya-devarakonda-lnEM5jOu-mc-unsplash-450x300.jpg",
    },
    {
      id: 3,
      category: "GADGETS",
      title: "Bose QuietComfort Earbuds II: Noise-Cancellation Kings Reviewed",
      date: "Jan 15, 2021",
      author: "Shane Doe",
      rating: "8.9",
      image:
        "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/omid-armin-gSZCLsE7ysc-unsplash-450x300.jpg",
    },
    {
      id: 4,
      category: "TECHNOLOGY",
      title: "AMD Ryzen 9 7900X Review: Zen 4 Has a Pricing Problem Reviewd",
      date: "Jan 15, 2021",
      author: "Shane Doe",
      rating: "81%",
      image:
        "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/42996726655_0df7830ab6_b-1.jpg",
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
      if (!values.title || !values.category || !values.image) {
        throw new Error("Title, category, and image are required");
      }
      setCards([...cards, { id: cards.length + 1, ...values }]);
      setIsCreating(false);
      toast.success("Card added successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleEditCard = (id, values) => {
    try {
      if (!values.title || !values.category || !values.image) {
        throw new Error("Title, category, and image are required");
      }
      setCards(
        cards.map((card) => (card.id === id ? { ...card, ...values } : card))
      );
      toast.success("Card updated successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="App container mx-auto p-14">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => setIsCreating(true)}
          className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded-full flex items-center"
        >
          <FaPlus className="mr-2" /> Create
        </button>
      </div>

      {isCreating && (
        <CardForm
          onSubmit={handleAddCard}
          onCancel={() => setIsCreating(false)}
        />
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onDelete={handleDelete}
            onEdit={handleEditCard}
          />
        ))}
      </div>

      <ToastContainer />
    </div>
  );
};

const Card = ({ card, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="card bg-white rounded-lg shadow-md relative w-[20rem] h-[23rem]">
      <div className="relative">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-[12rem] object-cover rounded-t-lg"
        />
        <div className="absolute bottom-0 left-3 bg-blue-700 text-white text-xs font-semibold px-2 py-1 rounded">
          {card.category}
        </div>
        <div className="absolute top-2 right-2 bg-blue-900 text-white font-bold py-3 px-4 rounded-full text-xs">
          {card.rating}
        </div>
      </div>
      <div className="p-3">
        <h2 className="text-xl font-semibold mb-1 p-2">{card.title}</h2>
        <div className="text-gray-500 text-xs mb-2 pl-2">
          {card.author} · {card.date}
        </div>

        <div className="crud-controls flex justify-between">
          <button onClick={() => setIsEditing(true)} className="text-green-500">
            <FaEdit />
          </button>
          <button onClick={() => onDelete(card.id)} className="text-red-500">
            <FaTrash />
          </button>
        </div>

        {isEditing && (
          <Modal>
            <CardForm
              card={card}
              onSubmit={(values) => {
                onEdit(card.id, values);
                setIsEditing(false);
              }}
              onCancel={() => setIsEditing(false)}
            />
          </Modal>
        )}
      </div>
    </div>
  );
};

const Modal = ({ children }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-1/3">{children}</div>
    </div>
  );
};

const CardForm = ({ card, onSubmit, onCancel }) => {
  const [startDate, setStartDate] = useState(
    card ? new Date(card.date) : new Date()
  );
  const [imagePreview, setImagePreview] = useState(card?.image || "");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <Formik
      initialValues={{
        category: card?.category || "",
        title: card?.title || "",
        date: startDate,
        author: card?.author || "",
        rating: card?.rating || "",
        image: imagePreview || "",
      }}
      onSubmit={(values) => {
        try {
          if (!values.title || !values.category || !values.image) {
            throw new Error("Title, category, and image are required");
          }
          values.date = startDate.toDateString();
          values.image = imagePreview;
          onSubmit(values);
          if (onCancel) onCancel();
        } catch (error) {
          toast.error(error.message);
        }
      }}
    >
      {({ setFieldValue }) => (
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
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="form-input w-full"
              />
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
              <label>Image</label>
              <input
                type="file"
                onChange={(event) => {
                  handleImageChange(event);
                  setFieldValue("image", event.currentTarget.files[0]);
                }}
                className="form-input w-full"
              />
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="mt-2 h-20 w-full object-cover rounded"
                />
              )}
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
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
