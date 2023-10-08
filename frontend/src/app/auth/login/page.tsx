import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import Provider from "../../../components/Provider/page";

export const metadata: Metadata = {
  title: "Login",
  description: "Login",
};

export default function page() {
  return (
<Provider>
<section className="form-control">
      <div className="image">
        <Image
          src="https://source.unsplash.com/random"
          alt="Login"
          title="Login"
          height={500}
          width={500}
        />
      </div>
      <div className="form">
        <div className="inner">
          <h1>Login Account</h1>
          <p>Hi, Welcome Again👋</p>
          <form>
            <div>
              {/* email */}
              <div>
                <label className="form-label" htmlFor="email">
                  Your Email
                </label>
                <input
                  className="input-control"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="name@company.com"
                  required
                />
              </div>
              {/* password */}
              <div>
                <label className="form-label" htmlFor="password">
                  Your Password
                </label>
                <input
                  className="input-control"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="text-right my-3">
              <Link
                href="/auth/forgot-password"
                className="text-sm font-semibold t-s-4 hover:t-s-5"
              >
                Forgot Password?
              </Link>
            </div>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              <span>Login</span>
            </button>
          </form>
          <hr />
          <div className="oauth">
            <button>
              <Image
                src="https://www.svgrepo.com/show/355037/google.svg"
                height={6}
                width={6}
                alt="Login with Google"
                title="Login with Google"
              />
              <span>Login with Google</span>
            </button>
          </div>
          <p>
            Need an account?
            <Link href="/auth/register">Create Account</Link>
          </p>
        </div>
      </div>
    </section>
</Provider>
  );
}
