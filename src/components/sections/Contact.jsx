import React, { useState } from "react";
import { Mail, MapPin, Github, Linkedin, Twitter, Send, MessageSquare } from "lucide-react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "../../utils/constants";
import { FaGithub } from 'react-icons/fa';
import FadeIn from "../animations/FadeIn";

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', messag: ''});

    const handleChange = (e) => {
        setFormData({
            ...formData {/* 1:59:44 */}
        })
    }
}

const Contact = () => {
  return (
    <div>Contact</div>
  )
}

export default Contact