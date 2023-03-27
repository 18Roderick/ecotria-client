import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Col, Form, Row } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaSave } from "react-icons/fa";
import { z } from "zod";
import Layout from "../../components/Layouts/Layout";

const ProductSchema = z.object({
  rubro: z.string().max(15).min(2).trim().optional(),
  categoryPost: z.string().max(50).min(2).trim(),
  subCategoryPost: z.string().max(50).min(2).trim(),
  titlePost: z.string().min(3).max(150),
  descriptionPost: z.string().min(5).max(300),
  price: z.number(),
  quantity: z.number().min(1),
  active: z.boolean().optional(),
});

type ProductSchemaType = z.infer<typeof ProductSchema>;

const Edit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductSchemaType>({
    resolver: zodResolver(ProductSchema),
  });

  const onSubmit: SubmitHandler<ProductSchemaType> = (data) => {
    console.log(data);
    //mutate({ token: String(token), data: cacheInfo });
  };

  return (
    <Layout>
      <main className="container">
        <section className="d-flex justify-content-center my-2">
          <Form className="form shadow-md border-2 p-3" onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col sm={12} md={6}>
                <Form.Group className="mb-3" controlId="tituloProducto">
                  <Form.Label>Titulo</Form.Label>
                  <Form.Control
                    type="text"
                    {...register("titlePost")}
                    placeholder="Nombre o titulo del producto"
                    isInvalid={errors.titlePost ? true : false}
                  />

                  {errors.titlePost ? (
                    <Form.Control.Feedback type="invalid">{errors.titlePost.message}</Form.Control.Feedback>
                  ) : null}
                </Form.Group>
              </Col>
              <Col sm={12} md={6}>
                <Form.Group className="mb-3" controlId="cantidadProductos">
                  <Form.Label>Cantidad</Form.Label>
                  <Form.Control
                    type="number"
                    {...register("quantity")}
                    placeholder="Cantidad de Productos"
                    isInvalid={errors.quantity ? true : false}
                  />

                  {errors.quantity ? (
                    <Form.Control.Feedback type="invalid">{errors.quantity.message}</Form.Control.Feedback>
                  ) : null}
                </Form.Group>
              </Col>
              <Col sm={12} md={6}>
                <Form.Group className="mb-3" controlId="CategoriaProducto">
                  <Form.Label>Categoría</Form.Label>
                  <Form.Control
                    type="text"
                    {...register("categoryPost")}
                    placeholder="Categoría del Producto"
                    isInvalid={errors.categoryPost ? true : false}
                  />

                  {errors.categoryPost ? (
                    <Form.Control.Feedback type="invalid">
                      {errors.categoryPost.message}
                    </Form.Control.Feedback>
                  ) : null}
                </Form.Group>
              </Col>
              <Col sm={12} md={6}>
                <Form.Group className="mb-3" controlId="SubCategoriaProducto">
                  <Form.Label>SubCategoría</Form.Label>
                  <Form.Control
                    type="text"
                    {...register("subCategoryPost")}
                    placeholder="SubCategoría del Producto"
                    isInvalid={errors.subCategoryPost ? true : false}
                  />

                  {errors.subCategoryPost ? (
                    <Form.Control.Feedback type="invalid">
                      {errors.subCategoryPost.message}
                    </Form.Control.Feedback>
                  ) : null}
                </Form.Group>
              </Col>
              <Col sm={12} md={6}>
                <Form.Group className="mb-3" controlId="precioProductos">
                  <Form.Label>Precio</Form.Label>
                  <Form.Control type="number" {...register("price")} placeholder="Cantidad de Productos" />
                </Form.Group>
              </Col>
              <Col sm={12} md={12}>
                <Form.Group className="mb-3" controlId="DescripcionProducto">
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control as={"textarea"} {...register("descriptionPost")} rows={5} />
                </Form.Group>
              </Col>
              <Col sm={12} className="text-right">
                <Button variant="primary" type="submit">
                  <FaSave color="#fff" size={20} />
                </Button>
              </Col>
            </Row>
          </Form>
        </section>
      </main>
    </Layout>
  );
};

export default Edit;
