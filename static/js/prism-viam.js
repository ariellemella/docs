(function () {
  Prism.languages['json-viam'] = Prism.languages.extend('json', {
      'keyword': new RegExp("\\b(?:_(?=\\s*:)|"
        + "acceleration|"
        + "additional_sync_paths|"
        + "address|"
        + "alpha|"
        + "args|"
        + "attributes|"
        + "auto_reconnect|"
        + "average_over_ms|"
        + "axis|"
        + "blur_radius_px|"
        + "bus_select|"
        + "capture_dir|"
        + "capture_disabled|"
        + "chip_select|"
        + "closeness_mm|"
        + "clustering_radius_mm|"
        + "color_camera_name|"
        + "components|"
        + "confidence_threshold|"
        + "confidence_threshold_pct|"
        + "config_params|"
        + "data_rate_ms|"
        + "debug|"
        + "depends_on|"
        + "depth_camera_name|"
        + "depth_map_factor|"
        + "depth_to_color|"
        + "detect_color|"
        + "detector_name |"
        + "detector_segmenter|"
        + "dev_file|"
        + "digital_interrupts|"
        + "distortion_parameters|"
        + "filters|"
        + "format|"
        + "formula|"
        + "frame|"
        + "fx|"
        + "fy|"
        + "gantry_rpm|"
        + "geometry|"
        + "global|"
        + "height_px|"
        + "high_threshold_pct|"
        + "homography|"
        + "host|"
        + "hue_tolerance_pct|"
        + "id|"
        + "input_kw_args|"
        + "insecure|"
        + "intrinsic_extrinsic|"
        + "intrinsic_parameters|"
        + "joints|"
        + "kw_args|"
        + "label_path|"
        + "lambda|"
        + "left|"
        + "length_mm|"
        + "Limit_pin_enabled|"
        + "limit_pin_enabled_high|"
        + "Limit_pins|"
        + "log|"
        + "low_threshold_pct|"
        + "map_rate_sec|"
        + "match|"
        + "max|"
        + "max_rpm|"
        + "mean_k|"
        + "mean_k_filtering|"
        + "merge_method|"
        + "min|"
        + "min_points_in_plane|"
        + "min_points_in_segment|"
        + "mm_per_revolution|"
        + "mode|"
        + "mode|"
        + "model|"
        + "model_path|"
        + "name|"
        + "nonlocal|"
        + "num_threads|"
        + "orb_n_features|"
        + "orb_n_ini_th_fast|"
        + "orb_n_levels|"
        + "orb_n_min_th_fast|"
        + "orb_scale_factor|"
        + "orientation|"
        + "output_kw_args|"
        + "parent|"
        + "pipeline|"
        + "pitch|"
        + "ppx|"
        + "ppy|"
        + "pwm|"
        + "radius_clustering_segmenter|"
        + "register_models|"
        + "return|"
        + "right|"
        + "rk1|"
        + "rk2|"
        + "rk3|"
        + "roll|"
        + "rotate_depth_degs|"
        + "samples_per_sec|"
        + "saturation_cutoff_pct|"
        + "segment_size_px|"
        + "sensors|"
        + "sigma|"
        + "source_cameras|"
        + "speed|"
        + "spi_bus|"
        + "spin_slip_factor|"
        + "spis|"
        + "step|"
        + "stepperDelay|"
        + "stereo_b|"
        + "stereo_th_depth|"
        + "stream|"
        + "subaxes_list|"
        + "sync_disabled|"
        + "sync_interval_mins|"
        + "target_frame|"
        + "tflite_classifier|"
        + "ticksPerRotation|"
        + "tp1|"
        + "tp2|"
        + "transform|"
        + "translation|"
        + "ttl_ms|"
        + "type|"
        + "url|"
        + "value|"
        + "value_cutoff_pct|"
        + "video_path|"
        + "video_path_pattern|"
        + "wheel_circumference_mm|"
        + "while|"
        + "width_mm|"
        + "width_px|"
        + "with|"
        + "yaw|"
        + "yield" + ")\\b")
  });
  Prism.highlightAll();
  document.querySelectorAll(".code-toolbar").forEach((el) => {
      el.classList.add('highlight');
  });
}())