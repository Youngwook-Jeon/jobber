// import { ChangeEvent } from 'react';
import { FC, ReactElement } from 'react';
import { FaEye, FaTimes } from 'react-icons/fa';
// import Alert from 'src/shared/alert/Alert';
import Button from 'src/shared/button/Button';
import TextInput from 'src/shared/inputs/TextInput';
import { IModalBgProps } from 'src/shared/modals/interfaces/modal.interface';
import ModalBg from 'src/shared/modals/ModalBg';

const LoginModal: FC<IModalBgProps> = ({ onClose }): ReactElement => {
  return (
    <ModalBg>
      <div className="relative top-[20%] mx-auto w-11/12 max-w-md rounded-lg bg-white md:w-2/3">
        <div className="relative px-5 py-5">
          <div className="mb-5 flex justify-between text-2xl font-bold text-gray-600">
            <h1 className="flex w-full justify-center">Sign In to Jobber</h1>
            <Button
              testId="closeModal"
              className="cursor-pointer rounded text-gray-400 hover:text-gray-600"
              role="button"
              label={<FaTimes className="icon icon-tabler icon-tabler-x" />}
              onClick={onClose}
            />
          </div>
          {/* {alertMessage && <Alert type="error" message={alertMessage} />} */}
          <div>
            <label htmlFor="email or username" className="text-sm font-bold leading-tight tracking-normal text-gray-800">
              Email or username
            </label>
            <TextInput
              id="username"
              name="username"
              type="text"
              //   value={userInfo.username}
              className="mb-5 mt-2 flex h-10 w-full items-center rounded border border-gray-300 pl-3 text-sm font-normal text-gray-600 focus:border focus:border-sky-500/50 focus:outline-none"
              placeholder="Enter email or username"
              //   onChange={(event: ChangeEvent) => {
              //     setUserInfo({ ...userInfo, username: (event.target as HTMLInputElement).value });
              //   }}
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-bold leading-tight tracking-normal text-gray-800">
              Password
            </label>
            <div className="relative mb-2 mt-2">
              <div className="absolute right-0 flex h-full cursor-pointer items-center pr-3 text-gray-600">
                {/* {passwordType === 'password' ? (
                  <FaEyeSlash onClick={() => setPasswordType('text')} className="icon icon-tabler icon-tabler-info-circle" />
                ) : (
                  <FaEye onClick={() => setPasswordType('password')} className="icon icon-tabler icon-tabler-info-circle" />
                )} */}
                <FaEye />
              </div>
              <TextInput
                id="password"
                name="password"
                // type={passwordType}
                // value={userInfo.password}
                className="flex h-10 w-full items-center rounded border border-gray-300 pl-3 text-sm font-normal text-gray-600 focus:border focus:border-sky-500/50 focus:outline-none"
                placeholder="Enter password"
                // onChange={(event: ChangeEvent) => {
                //   setUserInfo({ ...userInfo, password: (event.target as HTMLInputElement).value });
                // }}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <div
              onClick={() => {
                // if (onTogglePassword) {
                //   onTogglePassword(true);
                // }
              }}
              className="mb-6 ml-2 cursor-pointer text-sm text-blue-600 hover:underline dark:text-blue-500"
            >
              Forgot Password?
            </div>
          </div>
          <div className="flex w-full items-center justify-center">
            {/* <Button
              testId="submit"
              disabled={!userInfo.username || !userInfo.password}
              className={`text-md block w-full cursor-pointer rounded bg-sky-500 px-8 py-2 text-center font-bold text-white hover:bg-sky-400 focus:outline-none ${
                !userInfo.username || !userInfo.password ? 'cursor-not-allowed' : 'cursor-pointer'
              }`}
              label={`${isLoading ? 'LOGIN IN PROGRESS...' : 'LOGIN'}`}
              onClick={onLoginUser}
            /> */}
          </div>
        </div>
        <hr />
        <div className="px-5 py-4">
          <div className="ml-2 flex w-full justify-center text-sm font-medium">
            <div className="flex justify-center">
              Not yet a memeber?{' '}
              <p
                onClick={() => {
                  //   if (onToggle) {
                  //     onToggle(true);
                  //   }
                }}
                className="ml-2 flex cursor-pointer text-blue-600 hover:underline"
              >
                Join Now
              </p>
            </div>
          </div>
        </div>
      </div>
    </ModalBg>
  );
};

export default LoginModal;
