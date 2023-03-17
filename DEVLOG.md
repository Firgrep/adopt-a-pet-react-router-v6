# DEVLOG 

Educational notes to self.

* In order for nested routes to render properly, the parent route needs to be "told" that it should render the nested elements. Use React Router's <Outlet> component for this. 

* <useParams> sends a URL parameter which can be used to dynamically filter content. E.g. using the URL as a type to filter animal types. In this project, this action happens within a <useEffect()> hook. Remember to destruct the returned object of <useParams> in order to retrieve the URL. E.g. < const { param } = useParams() >

## Learnig outcomes

- Configure a router
- Implement static and dynamic routing
- Implement navigational components that avoid page refreshes
- Add flexibility to your router with dynamic routing
- Imperatively and declaratively redirect users
- Query parameters to sort and filter resources
- Create continuity between views using nested routing