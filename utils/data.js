export const data = {
  Node1: {
    blocked: [
      {
        url: "https://www.google.com",
        status: "active",
        score: 3.2,
        reports: 5,
        last: "2021-03-01",
      },
      {
        url: "https://www.youtube.com",
        status: "active",
        score: 3.8,
        reports: 3,
        last: "2021-03-01",
      },
      {
        // add more data here
        url: "https://facebook.com",
        status: "active",
        score: 4.2,
        reports: 2,
        last: "2021-03-01",
      },
    ],
    appeals: [
      {
        url: "https://www.google.com",
        status: "Wrongly Blocked",
        email: "abc@google.com",
        desc: "This is a test description",
      },
      {
        url: "https://www.youtube.com",
        status: "Complaint Resolved",
        email: "abc@youtube.com",
        desc: "This is a test description",
      },
    ],
  },
  Node2: {
    // fill it with different data
    blocked: [
      {
        url: "https://www.google.com",
        status: "active",
        score: 3.2,
        reports: 5,
      },
      {
        url: "https://www.netflix.com",
        status: "active",
        score: 3.8,
        reports: 3,
      },
    ],
    appeals: [
      {
        url: "https://www.youtube.com",
        status: "Complaint Resolved",
        email: "dxfgchv@youtube.com",
        desc: "This is a test description",
      },
      {
        url: "https://www.netflix.com",
        status: "Complaint Resolved",
        email: "abcd@netflix.com",
        desc: "This is a test description",
      },
    ],
  },
  Node3: [],
};
