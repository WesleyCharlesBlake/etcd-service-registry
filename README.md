# etcd-service-registry
Etcd Cluster provisioned with Ansible, with a service registery


Update the `hosts` file with your desired ipaddress / hostname for your cluster nodes. eg:

```
$ cat hosts

[etcd]
172.16.20.1
172.16.20.2
172.16.20.3
```

Run the the play:

```
ansible-playbook playbook.yml -i $PWD/hosts
```

This will set up the initial cluster state.


