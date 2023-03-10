---
title: "Configure a Webcam"
linkTitle: "Webcam"
weight: 33
type: "docs"
description: "Configure a standard camera that streams camera data."
tags: ["camera", "components"]
# SMEs: Bijan, vision team
---

`webcam` is the general camera model.
If the camera drivers are among those in [this mediadevices repository](https://github.com/pion/mediadevices). the camera will work with the webcam model.

{{< tabs name="Configure a Webcam" >}}
{{< tab name="Config Builder" >}}

<br>
On the <b>COMPONENTS</b> subtab, navigate to the <b>Create Component</b> menu.
Enter a name for your camera, select the type <code>camera</code>, and select the <code>webcam</code> model.
<br>
<img src="../img/create-webcam.png" alt="Creation of webcam camera in the Viam app config builder." style="max-width:500px" />
<br>
Fill in the attributes for your webcam view:
<br>
<img src="../img/configure-webcam.png" alt="Configuration of a webcam camera in the Viam app config builder." />
<br>

{{< /tab >}}
{{% tab name="JSON Template" %}}

```json-viam {class="line-numbers linkable-line-numbers"}
{
    "name": "<camera_name>",
    "type": "camera",
    "model" : "webcam",
    "attributes": {
        "intrinsic_parameters": {
            "width_px": <integer>,
            "height_px": <integer>,
            "fx": <float64>,
            "fy": <float64>,
            "ppx": <float64>,
            "ppy": <float64>
        },
        "distortion_parameters": {
            "rk1": <float64>,
            "rk2": <float64>,
            "rk3": <float64>,
            "tp1": <float64>,
            "tp2": <float64>
        },
        "debug": <boolean>,
        "format": <string>,
        "video_path": <string>,
        "width_px": <integer>,
        "height_px": <integer>
    }
}
```

{{% /tab %}}
{{< /tabs >}}

The following attributes are available for webcams:

| Name | Inclusion | Description |
| ---- | --------- | ----------- |
| `intrinsic_parameters` | *Optional* | The intrinsic parameters of the camera used to do 2D <-> 3D projections: <ul> <li> <code>width_px</code>: The expected width of the aligned image in pixels. </li> <li> <code>height_px</code>: The expected height of the aligned image in pixels. </li> <li> <code>fx</code>: The image center x point. </li> <li> <code>fy</code>: The image center y point. </li> <li> <code>ppx</code>: The image focal x. </li> <li> <code>ppy</code>: The image focal y. </li> </ul> |
| `distortion_parameters` | *Optional* | Modified Brown-Conrady parameters used to correct for distortions caused by the shape of the camera lens: <ul> <li> <code>rk1</code>: The radial distortion x. </li> <li> <code>rk2</code>: The radial distortion y. </li> <li> <code>rk3</code>: The radial distortion z. </li> <li> <code>tp1</code>: The tangential distortion x. </li> <li> <code>tp2</code>: The tangential distortion y. </li> </ul> |
| `debug` | *Optional* | Enables the debug outputs from the camera if `true`. Defaults to `false`. |
| `format` | *Optional* | The camera image format, used with video_path to find camera. |
| `video_path` | *Optional* | The path to the webcam. Often `video0`. If you don't provide a video path, it defaults to the first valid video path it finds. |
| `width_px` | *Optional* | The camera image width in pixels, used with video_path to find camera with this resolution. Defaults to the closest possible value to closest to 480. |
| `height_px` | *Optional* | The camera image height in pixels, used with video_path to find camera with this resolution. Defaults to the closest possible value to closest to 640. |

## View the camera stream

{{< readfile "/static/include/components/camera-view-camera-stream.md" >}}

## Troubleshooting

### `video0` does not work

If you're working on a linux machine, run `v4l2-ctl --list-devices` in your terminal to see available video paths.

### No visible live video feed

If you're working on a linux machine, `ssh` into it, then restart `viam-server` by running:

```bash
sudo systemctl restart viam-server
```

If this doesn't work, you can reboot your machine by running:

```bash
sudo reboot
```

If `video0` does not work for you, you can find another potential `video_path` by typing the following in your terminal:

```bash
v4l2-ctl --list-devices
```

The output for a webcam looks like this, in which case `video1` might be the correct path to use for `video_path`:

```bash
C270 HD WEBCAM (usb-0000:01:00.0-1.2):
 /dev/video0
 /dev/video1
 /dev/media4
```

### Timeout errors on a Raspberry Pi

If you are getting "timeout" errors from GRPC when adding a `webcam` model on a Raspberry Pi, make sure the webcam port is enabled on the Pi (common if you are using a fresh Pi right out of the box):

```bash
sudo raspi-config
Interface Options -> Camera -> Enable Camera
Restart the Pi
```

## Next Steps

{{< readfile "/static/include/components/camera-model-next-steps.md" >}}