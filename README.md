# The full Project Architecture 

### Database : vercel

> Cloud database that stores user information

#### Profile Collection:
| Key | Type |
| --- | --- |
| `Document ID` | String |
| `image` | String |
| `bio` | String |
| `user_id` | String |
| `name` | String |

Profile Indexes:
| KEY           | TYPE          | ATTRIBUTE     | ASC/DESC      |
| ------------- | ------------- | ------------- | ------------- |
| user_id       | key           | user_id       | asc           |
| name          | fulltext      | name          | asc           |

Profile Settings (Update Permissions):
| Add Role      | PERMISSIONS   |
| ------------- | ------------- |
| All guests    | Read          |
| All users     | Create, Read, Update, Delete |

#### Post Collection:
| Key | Type |
| --- | --- |
| `Document ID` | String |
| `user_id` | String |
| `video_url` | String |
| `text` | String |
| `created_at` | String |
    
Post Indexes:
| KEY           | TYPE          | ATTRIBUTE     | ASC/DESC      |
| ------------- | ------------- | ------------- | ------------- |
| user_id       | key           | user_id       | asc           |

Profile Settings (Update Permissions):
| Add Role      | PERMISSIONS   |
| ------------- | ------------- |
| All guests    | Read          |
| All users     | Create, Read, Update, Delete |

#### Like Collection:
| Key | Type |
| --- | --- |
| `Document ID` | String |
| `user_id` | String |
| `post_id` | String |

Like Indexes: 
| KEY           | TYPE          | ATTRIBUTE     | ASC/DESC      |
| ------------- | ------------- | ------------- | ------------- |
| user_id       | key           | user_id       | asc           |
| id            | unique        | id            | asc           |
| post_id       | key           | post_id       | asc           |

Like Settings (Update Permissions):
| Add Role      | PERMISSIONS   |
| ------------- | ------------- |
| All guests    | Read          |
| All users     | Create, Read, Update, Delete |

#### Comment Collection:
| Key | Type |
| --- | --- |
| `Document ID` | String |
| `user_id` | String |
| `post_id` | String |
| `text` | String |
| `created_at` | String |
    
Comment Indexes:
| KEY           | TYPE          | ATTRIBUTE     | ASC/DESC      |
| ------------- | ------------- | ------------- | ------------- |
| post_id       | key           | post_id       | asc           |

Comment Settings (Update Permissions):
| Add Role      | PERMISSIONS   |
| ------------- | ------------- |
| All guests    | Read          |
| All users     | Create, Read, Update, Delete |

### S3 : Appwrite

> Cloud storage that stores the chunked video, files

Just create a bucket and upload the video chunks to the bucket, and add the bucket url to the database corresponding to the user who posted the video/image upload

### Worker functions : Appwrite functions 

> Workers that run tasks in a kubernetes cluster hosted on Appwrite 

These were written and ran by seperate pods in their own repositories, some of the repositories are public repositories that I took and used in the project, such as

#### Video Convertion function github
- https://github.com/ManzDev/video-converter-scripts
    - Only used the mp4.bat file then ran a script that passed the video in to the .bat file

#### Video Chunking function github 
- https://github.com/c0decracker/video-splitter
    - Command line linux that ran the video from the video-converter in to the video-splitter that returns a ffmpeg thing, I dont really understand it that much 


The rest were just written _TypeScript_ code by me which can be found in **hooks** file within the project


### Application Hosting : Vercel

> Using Vercel to host the video

- First, make a repository of the project with only the tiktok clone folder [https://github.com/joshpmperry/tiktok-clone], in a .env file add all the environment variables that the project needs to connect to the database and s3, in the project folder there should be a .env file, if you wish to use my environment variables. 
- Second, go to Appwrite and make sure the project has set the hostname to the given tiktok-clone websites hostname, such as mine would be set as _tiktok-clone-josh.vercel.app_ 
- Third, check on vercel to make sure the database is up and running, then check on Appwrite if anyfiles uploaded are there.  
- Optionally, use my repository, drag the .env file in to the project folder then on vercel set the root to the tiktok clone folder then let vercel build the website 


## If you just want to write the project locally, this repository can be used as a localhost runable project, as the files in here also have the functions to convert, chunk and etc... although it will be a little bit more slower and may crash the database at some point. :D