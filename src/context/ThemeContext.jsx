"use client";
// to set up context two hooks are needed useState and useContext so we need to be in client - this is a client component

import { useState, createContext, useContext } from "react";

const ThemeContext = createContext("light");