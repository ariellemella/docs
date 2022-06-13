---
title: Viam Install Instructions
summary: Instructions which guide the user through installing viam-server and syncing that robot with app.viam.com
authors:
    - Matt Dannenberg, Hazal Mestci
date: 2022-01-18, revised on 2022-04-07
version: Raspberry Pi Imager v1.7.2
---
# Installing Viam RDK Server on Raspberry Pi


## Resources

The instructions assume you have the following hardware:

* Raspberry Pi Single Board Computer
* microSD card
* an internet connected computer
* a way to connect the microSD card to the computer (ex, microSD slot or microSD reader)

Before installing the Viam RDK, you’ll need a Raspberry Pi running a 64-bit linux distribution. If you do not have linux installed on your Raspberry Pi, skip ahead to [Installing Raspian on the Raspberry Pi](installation.md#installing-raspian-on-the-raspberry-pi). If you already have a Raspberry Pi with linux installed on it, check if the linux installation on your Raspberry Pi is 64-bit. First, `ssh` into your pi and then run `lscpu`. Example output:
![lscpu-output](../tutorials/img/lscpu-output.png)
If the line of output which reads “Architecture:     <value>” has a value which ends in 64, skip ahead to [Installing viam-server](installation.md#installing-viam-server). Otherwise continue to [Installing Raspian on the Raspberry Pi](installation.md#installing-raspian-on-the-raspberry-pi).

## Installing Raspian on the Raspberry Pi
A Raspberry Pi boots from a microSD card. Our first step is to set up a linux installation on that microSD card. Connect the microSD card to your computer.

We’ll be using the Raspberry Pi Imager to flash the microSD card. If you do not already have the Raspberry Pi Imager, you can download it following the install instructions [here](https://www.raspberrypi.com/software/). After successful installation, connect your microSD card to your computer and launch the Raspberry Pi Imager. You should be greeted with a window that looks like:  
![imager-launch-screen](../tutorials/img/imager-launch-screen.png)

Select `CHOOSE OS`.  Since we need a 64-bit version of linux, you’ll need to select it from the `Rapsberry Pi OS (other)` menu.
![imager-select-custom-os](../tutorials/img/select-other-custom-os.png)

Then select the entry titled `Raspberry Pi OS Lite (64-bit)`.
![select-other-rpi](../tutorials/img/select-other-rpi.png)

You should be returned to the initial launch screen. To make your Raspberry Pi easier to access, we recommend configuring hostname, ssh credentials, and wifi. Click the gear-shaped settings icon in the lower right to bring up the Advanced options menu (NB: if you are using a non-raspberry pi OS, altering the Advanced options will cause the initial bootup to fail):
![imager-set-hostname](../tutorials/img/imager-set-hostname.png)

Check `Set hostname` and enter the name you’d like to access the pi by in that field. Remember the name you choose as you will need to make use of it later. I’ve chosen "hazal-pi". 

Then check `Enable SSH`. Using SSH Keys for authentication is a great way of securing your Raspberry Pi as only someone with the private SSH key will be able to authenticate to your system. If you select `Allow public-key authentication only`, and the section `set authorized_ keys for 'pi'` is pre populated, that means that you do have an existing public SSH key that is ready to use. You don't have to change this section in that case. 

If this section is empty, you can either generate a new SSH key by following [these instructions](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent), or you can use password authentication instead. 
![imager-set-ssh](../tutorials/img/imager-set-ssh.png)

If you decide to use password authentication, click on `Use password authentication`. If you scroll down, you have the option to change the username, then to set a password: 
![imager-set-passwordauthentication](../tutorials/img/imager-set-passwordauthentication.png)

Be sure to write down or otherwise keep track of the `hostname`, `username`, and `password` you've configured. You will use them later on. If you didn't change the username, the default one is pi. 

Lastly, check `Configure wireless LAN` and enter your wireless network credentials. SSID (short for Service Set Identifier) is your Wi-Fi's name, followed by passcode. Change the section `Wireless LAN country` to where your router is currently being operated and then you will hit save:
![imager-set-wifi](../tutorials/img/imager-set-wifi.png)

This should return you to the initial screen. Now we need to pick our storage medium, so click `CHOOSE STORAGE`:
![imager-selected-os](../tutorials/img/imager-selected-os.png)

You may have many devices listed, select the microSD card you intend to use in your Raspberry Pi. If this page is blank and you don't any listed, make sure your microSD card is connected to your computer correctly:
![imager-select-storage](../tutorials/img/imager-select-storage.png)

After clicking save, double check your OS and Storage settings and then click `WRITE`:
![imager-write-confirm](../tutorials/img/imager-write-confirm.png)

You’ll be prompted to confirm erasing your microSD card, select `YES`. You may also be prompted by your operating system to enter an Administrator password:
![imager-permission](../tutorials/img/imager-permission.png)

After granting permissions to the Imager, it will begin writing and then verifying the linux installation to the MicroSD card:
![imager-writing](../tutorials/img/imager-writing.png)

Remove the microSD card from your computer when its done:

![imager-done](../tutorials/img/imager-done.png)

Place it into your Raspberry Pi and boot the Pi by plugging it in to an outlet. A red led will turn on to indicate its on. 

## Installing viam-server

Once your Raspberry Pi is plugged in and turned on, wait a minute or two and then attempt to access your pi from your terminal emulator. Launch your terminal and run this command; the text in <> should be replaced (including the < and > symbols themselves) with the user and host names you configured above:

```bash
ssh <username>@<hostname>.local
```

If you are prompted “Are you sure you want to continue connecting?”, type “yes” and hit enter. Then, enter your password. You should be greeted by a login message and a command prompt (`$USERNAME@$HOSTNAME:~ $`). Now that you’re on the Pi, download the latest viam-server AppImage package: 
```bash
wget http://packages.viam.com/apps/viam-server/viam-server-latest-aarch64.AppImage -O viam-server
```

Make it executable by running the following command:
```bash
chmod 755 viam-server
```

Then install it as root:
```bash
sudo ./viam-server --aix-install
```

## Adding your pi on app.viam.com

In your web browser, navigate to app.viam.com and log in. Then if you have not already, create a new location by filling out the form on the left  and then clicking `New Location`.
![add-location](../tutorials/img/add-location.png)

Select your location and use the form on the right to create a new Robot:
![add-robot](../tutorials/img/add-robot.png)

Navigate to your new robot, which should show an empty config like below:
![view-robot](../tutorials/img/view-robot.png)

Now we have to copy the json data into the '/etc/viam.json' file on your pi. This can be done by going back to the terminal window connected to your pi and running the following: 
```bash
echo '<delete this placeholder text including < and > symbols, paste the config you will copy in the next step into these quotes, keep the quotes themselves>' | sudo tee /etc/viam.json
```
It will look like this (starting with your own username and hostname) when you delete the placeholder text and keep the quotes: 

![copytingjsondata-empty](../tutorials/img/terminal-copytingjsondata-empty.png)

Now go back to app.viam.com on your browser, click `COPY RDK CONFIG` at the bottom. This should fill your clipboard with the json config needed for your pi talk to app.viam.com as this robot. Go back to your terminal and paste this between the quotes. 

It should look like this:

![copytingjsondata-filled](../tutorials/img/terminal-copytingjsondata-filled.png)

Run it, then restart the viam-server:
```bash
sudo systemctl restart viam-server.service
```

Back on app.viam.com if we refresh the page, we can confirm the Pi has connected and pulled the config by looking at the top of the Robot page and seeing that `host` and `ips` fields are populated and that the `last access` field reads `less than a minute ago`.

## Next Steps
Now that you've got the viam-server up and running, we can start configuring your robot and the real fun can begin!

In the `CONFIG` tab, you can describe the hardware attached to your Pi which will allow viam to actuate it and expose APIs for it. Click on `NEW COMPONENT` and then populate the resulting component with the configuration information for your hardware.
Once your configuration changes are saved, you can switch to the `CONTROL` tab to actuate your hardware via the webUI.

From here, you can download our [python SDK](https://python.viam.dev/) and use it to write programs to make your robot autonomous. The readme on the python SDK landing page has [instructions](https://python.viam.dev/#easy-setup-via-app-viam-com) to guide you through connecting to and using your robot via the SDK.