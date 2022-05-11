import React from "react";
import { Button, Card } from "react-bootstrap";
import useServices from "../../Hook/useServices";
import PageTitle from "../Shared/PageTitle/PageTitle";

const ManageService = () => {
  const [services, setServices] = useServices();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      const url = `http://localhost:5000/service/${id}`;
      console.log(url);
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
        //   console.log(data);
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        });
    }
  };

  return (
    <div className="w-50 mx-auto mt-3 ">
      <PageTitle title="manage" />
      <h2 className="text-center mb-3">Manage Your Services</h2>
      {services.map((service) => (
        <div key={service._id}>
          <Card className="mt-3 shadow-lg">
            <Card.Body className="text-center">Name: {service.name}</Card.Body>
            <Button onClick={() => handleDelete(service._id)} variant="primary">
              Delete Item
            </Button>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ManageService;