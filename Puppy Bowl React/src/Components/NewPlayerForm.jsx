const NewPlayerForm = () => <div>"The NewPlayerForm Component"</div>;
export default NewPlayerForm;

import { useForm } from 'react-hook-form';

function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name:
        <input {...register('name', { required: true })} />
        {errors.name && <span>This field is required</span>}
      </label>
      <br />
      <label>
        Puppy
        <input {...register('Puppy', { required: true })} />
        {errors.puppy && <span>This field is required</span>}
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}