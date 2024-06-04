import React, { useState, useEffect } from 'react';
import Layout from "@/components/layouts/Layout";
import ClientFormSurveyAlumni from '@/components/client/FormSurveyAlumni/FormSurveyAlumni';



export default function FormSurvey() {


  return (
    <Layout>
      <ClientFormSurveyAlumni></ClientFormSurveyAlumni>
    </Layout>
  )
}
