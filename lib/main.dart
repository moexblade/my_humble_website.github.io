import 'package:flutter/material.dart';
import 'pages/home.dart';
import 'pages/about_me.dart';

void main() {
  runApp(const MyWebsite());
}

class MyWebsite extends StatelessWidget {
  const MyWebsite({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'My Humble Website',
      theme: ThemeData(),
      home: const HomePage(),
    );
  }
}

