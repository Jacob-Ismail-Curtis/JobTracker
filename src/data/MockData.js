const MockApplications = [
  {
    id: 1,
    company: 'Google',
    position: 'Web Developer',
    location: 'New York',
    status: 'Interview',
    statusDates: {
      Sent: '2023-01-01',
      Confirmation: '2023-01-03',
      'Action Needed': '2023-01-05',
      Interview: '2023-01-10',
      Offer: null
    }
  },
  {
    id: 2,
    company: 'Amazon',
    position: 'Software Engineer',
    location: 'San Francisco',
    status: 'Action Needed',
    statusDates: {
      Sent: '2023-01-02',
      Confirmation: '2023-01-04',
      'Action Needed': '2023-01-06',
      Interview: null,
      Offer: null
    }
  },
  {
    id: 3,
    company: 'Palantir',
    position: 'Software Engineer',
    location: 'London',
    status: 'Confirmation',
    statusDates: {
      Sent: '2023-01-02',
      Confirmation: '2023-01-04',
      'Action Needed': '2023-01-06',
      Interview: null,
      Offer: null
    }
  },
];

export default MockApplications;
