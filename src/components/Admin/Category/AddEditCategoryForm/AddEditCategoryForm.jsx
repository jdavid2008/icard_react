/* eslint-disable react/prop-types */
import {useState, useCallback} from 'react';
import { Form, Image, Button } from "semantic-ui-react";
import { useDropzone } from "react-dropzone";
import { useFormik } from 'formik';
import * as Yup from "yup";

import { useCategory } from "../../../../hooks";
import "./AddEditCategoryForm.scss";

export const AddEditCategoryForm = ( {onClose, onRefresh, category} ) => {
    const [previewImage, setPreviewImage] = useState(category?.image || null)
    const { addCategory, updateCategory } = useCategory();

    const formik = useFormik({
        initialValues: initialValues(category),
        validationSchema: category? Yup.object(updateSchema()) : Yup.object(newSchema()),
        validateOnChange: false,
        onSubmit:  async (formValue)=> {

            try {
                if (category) await updateCategory(category.id, formValue);
                else await addCategory(formValue);
                onRefresh();
                onClose();

            } catch (error) {
                console.log(error)
            }
            
        }
    })

    const onDrop = useCallback(async (acceptedFile) => {
        const file = acceptedFile[0];
        await formik.setFieldValue('image',file);
        setPreviewImage(URL.createObjectURL(file))
    }, []);

    const { getInputProps, getRootProps} = useDropzone({
        accept: 'image/jpeg, image/png image/jpg',
        noKeyboard: true,
        multiple: false,
        onDrop
    });
    
  return (
    <Form className="add-edit-category-form" onSubmit={formik.handleSubmit}>
        <Form.Input 
            name='title' 
            placeholder="Nombre de la categoria" 
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.errors.title}
        />
        <Button 
            type="button" 
            fluid 
            color={formik.errors.image && "red"}
            {...getRootProps()}
        >
            {previewImage? "Cambiar Imagen":"Subir Imagen"}
        </Button>
        <input {...getInputProps} />
        <Image src={previewImage} fluid/>

        <Button type="submit" primary fluid content={category?"Actualizar": "Crear"}>

        </Button>
    </Form>
  )
}

function initialValues(data) {
    return {
        title: data?.title || "",
        image: ''
    }
}

function newSchema() {
    return {
        title: Yup.string().required(true),
        image: Yup.string().required(true),
    }
}

function updateSchema() {
    return {
        title: Yup.string().required(true),
        image: Yup.string(),
    }
}