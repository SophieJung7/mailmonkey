import React, { Component } from 'react';
import { FaGoogle } from 'react-icons/fa';

class SignIn extends Component {
  render() {
    return (
      <div class='container'>
        {/* <!-- Outer Row --> */}
        <div class='row justify-content-center'>
          <div class='col-xl-10 col-lg-12 col-md-9'>
            <div class='card o-hidden border-0 shadow-lg my-5'>
              <div class='card-body p-0'>
                {/* <!-- Nested Row within Card Body --> */}
                <div class='row'>
                  <div class='col-lg-6 d-none d-lg-block bg-login-image'></div>
                  <div class='col-lg-6'>
                    <div class='p-5'>
                      <div class='my-5 text-center'>
                        <h1 class='h4 text-gray-900 mb-4'>SURVEY MONKEY</h1>
                        <p>
                          Get the feedback you need with a global leader in
                          survey software.
                        </p>
                      </div>
                      <hr />
                      <div className='my-5'>
                        <a
                          href='/auth/google'
                          style={{ color: 'white' }}
                          className='btn btn-user btn-block btn-google'
                        >
                          <div className='btn btn-user btn-block btn-google border-radius-zero'>
                            <FaGoogle className='mr-2' /> Login With Google
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
