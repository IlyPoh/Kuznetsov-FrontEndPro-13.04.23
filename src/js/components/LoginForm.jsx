import React from 'react';

import { useFormik } from 'formik';
import { LoginSchema } from '../schemas/index';
import { FORM_TEXT as FT } from '../helpers/data';

export const LoginForm = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
    },
    validationSchema: LoginSchema,
    onSubmit: (_, actions) => {
      new Promise((resolve) => setTimeout(resolve, 500))
        .then(() => {
          actions.resetForm();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="login-form-block">
        <div className="login-form-title">{FT.title}</div>
        <div className="login-form-label">
          <label htmlFor="name">{FT.name}</label>
          <input
            className={errors.name && touched.name ? 'error' : 'success'}
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={FT.placeholderName}
            id="name"
            type="text"
          />
          {errors.name && touched.name && (
            <div className="login-form-label-message">{errors.name}</div>
          )}
        </div>
        <div className="login-form-label">
          <label htmlFor="email">{FT.email}</label>
          <input
            className={errors.email && touched.email ? 'error' : 'success'}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={FT.placeholderEmail}
            id="email"
            type="email"
          />
          {errors.email && touched.email && (
            <div className="login-form-label-message">{errors.email}</div>
          )}
        </div>
        <div className="login-form-label">
          <label htmlFor="phone">{FT.phone}</label>
          <input
            className={errors.phone && touched.phone ? 'error' : 'success'}
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={FT.placeholderPhone}
            id="phone"
            type="text"
          />
          {errors.phone && touched.phone && (
            <div className="login-form-label-message">{errors.phone}</div>
          )}
        </div>
        <div className="login-form-button">
          <button
            disabled={isSubmitting}
            className={isSubmitting ? 'btn submitting' : 'btn'}
          >
            {FT.button}
          </button>
        </div>
      </div>
    </form>
  );
};
